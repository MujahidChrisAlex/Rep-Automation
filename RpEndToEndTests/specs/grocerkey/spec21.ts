import {} from "jasmine";
import { LoginPage } from "../../pom/grocerkey/login-page.pom";
import { SubscriptionPage } from "../../pom/grocerkey/subscription-page.pom";
import { browser } from "protractor";

const data = browser.params.gkData;
const page = new LoginPage();
const subPage = new SubscriptionPage();

describe("[Grocer Key] Go to grocer key's homepage, Login and goto MSI page and verify MONTHLY TAB elements and edit values from there", function () {
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

  it("should click on first Date button on Monthly tab", async () => {
    msi.clickMonthlyOrderDateBtn();
  });

  it("should go to Next Order Tab and Change Delivery Method", async () => {
    msi = msi.gotoNextOrderTab();
    msi.clickManageBtn();
    msi.clickChangeDeliveryMethodBtn();
    msi.clickDeliveryRadioBtn();
  });

  it("should click the Save Button and verify that Orders Tab should be displayed", async () => {
    msi.clickSaveDeliveryMethodBtn();
    msi.gotoNextOrderTab();
    expect(msi.DuplicateOrderTabIsPresent()).toBe(true);
  });

  it("should reset the Delivery Method as previous", async () => {
    msi.clickChangeDeliveryMethodBtn();
    msi.clickDeliveryRadioBtn();
  });

  it("should verify that Order Tabs should disappear", async () => {
    msi.clickSaveDeliveryMethodBtn();
    expect(msi.DuplicateOrderTabIsPresent()).toBe(false);
  });
});
