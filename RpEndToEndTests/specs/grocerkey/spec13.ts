import {} from "jasmine";
import { LoginPage } from "../../pom/grocerkey/login-page.pom";
import { SubscriptionPage } from "../../pom/grocerkey/subscription-page.pom";
import { browser } from "protractor";

const data = browser.params.gkData;
const page = new LoginPage();
const subPage = new SubscriptionPage();

describe("[Grocer Key] Go to grocer key's homepage, Login and goto MSI page and verify MANAGE List Item functionality", function () {
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

  it("should open MANAGE List Item Tab screen", async () => {
    msi = msi.gotoListTab();
    msi.clickManageBtn();
  });

  it("should allow to edit Send Me drop down value from Manage screen", async () => {
    msi.clickSendMeDropdown();
  });

  it("should allow to edit Every Week drop down value Manage screen", async () => {
    msi.clickMonthsDropdown();
  });

  it("should open List Item Tab on MSI page and compare changed Send Me Values, which should be same", async () => {
    var changed = msi.getChangedSendMeValue();
    msi.gotoListTab();
    expect<any>(changed).toBe(msi.getChangedSendMeValue());
  });

  it("should allow to edit Send Me drop down value from List Item Tab screen", async () => {
    msi.clickSendMeDropdown();
  });

  it("should allow to edit Every Week drop down value List Item Tab screen", async () => {
    msi.clickMonthsDropdown();
  });

  it("should open MANAGE List Item Tab on MSI page and compare changed Send Me Values, which should be same", async () => {
    var changedVal = msi.getChangedSendMeValue();
    msi.clickManageBtn();
    expect<any>(changedVal).toBe(msi.getChangedSendMeValue());
  });
});
