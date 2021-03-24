import {} from "jasmine";
import { LoginPage } from "../../pom/grocerkey/login-page.pom";
import { SubscriptionPage } from "../../pom/grocerkey/subscription-page.pom";
import { browser } from "protractor";

const data = browser.params.gkData;
const page = new LoginPage();
const subPage = new SubscriptionPage();

describe("[Grocer Key] Go to grocer key's homepage, Login and goto MSI List Item page and verify SKIP ORDER functionality", function () {
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

  it("should open List Item Tab on MSI page and click Cancel Replenish button", async () => {
    msi = msi.gotoListTab();
    msi.clickCancelReplenishmentBtn();
  });

  it("should verify that Skip Delivery Button must be visible on the screen", async () => {
    expect(await msi.skipDeliveryBtnIsPresent()).toBe(true);
  });

  it("should click Skip Delivery button", async () => {
    msi.clickSkipDeliveryBtn();
  });

  it("should verify that delivery date must be skipped to some future date", async () => {
    msi.gotoListTab();
    var oldDate = msi.getSkipDeliveryDate();
    msi.clickCancelReplenishmentBtn();
    msi.clickSkipDeliveryBtn();
    msi.gotoListTab();
    expect<any>(oldDate).toEqual(msi.getSkipDeliveryDate());
  });
});
