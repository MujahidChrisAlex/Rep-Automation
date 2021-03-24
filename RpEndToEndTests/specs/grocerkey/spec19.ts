import {} from "jasmine";
import { LoginPage } from "../../pom/grocerkey/login-page.pom";
import { SubscriptionPage } from "../../pom/grocerkey/subscription-page.pom";
import { browser } from "protractor";

const data = browser.params.gkData;
const page = new LoginPage();
const subPage = new SubscriptionPage();

describe("[Grocer Key] Go to grocer key's homepage, Login and goto MSI page and verify that MONTHLY tab elements functioning properly", function () {
  var msi: any = subPage.msiWidget;
  page.open(data.homePageUrl);

  it("should click on Choose Btn", async () => {
    page.clickChooseBtn();
  });

  it("should select Store", async () => {
    page.clickChooseStoreBtn();
    page.open(data.storeLocationUrl);
  });

  it("should click Start Shopping", async () => {
    page.clickStartShopping();
  });

  it("should click Login Btn", async () => {
    page.clickLogInBtn();
  });

  it("should enter valid credentials and successfully login", async () => {
    page.loginUser(data.email, data.password);
  });

  it("should goto My Subscription page", async () => {
    page.open(data.mySubscriptionsUrl);
  });

  it("should open MONTHLY Tab on MSI page", async () => {
    msi = msi.gotoMonthlyTab();
  });

  it("should display a total of 6 months record, with the initial view starting the current month", async () => {
    expect(await msi.getCurrentDate()).toContain(msi.getCurrentMonth());
    expect(await msi.getMonthsCount()).toEqual(6);
  });

  it("should verify that Previous Button must appear disabled by default", async () => {
    expect(await msi.verifyPreviousBtnIsDisabled()).toBe(false);
  });

  it("should display next months by clicking on > Arrow", async () => {
    var nextMonthDate = msi.getCurrentDate();
    msi.clickNextBtn();
    expect(await msi.getCurrentDate()).toBeLessThan(nextMonthDate);
  });

  it("should display previous month by clicking on < Arrow", async () => {
    msi.clickPreviousBtn();
    expect(await msi.getCurrentDate()).toContain(msi.getCurrentMonth());
  });

  it("should verify that Monthly tab must display items, and date when they are arriving", async () => {
    var dateName = msi.getMonthlyOrderDay();
    expect(await msi.getDays()).toContain(dateName);
    expect(await msi.getMonthlyOrderDate()).toContain("Item");
  });
});
