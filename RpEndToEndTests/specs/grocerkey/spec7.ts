import {} from "jasmine";
import { LoginPage } from "../../pom/grocerkey/login-page.pom";
import { SubscriptionPage } from "../../pom/grocerkey/subscription-page.pom";
import { browser } from "protractor";

const data = browser.params.gkData;
const page = new LoginPage();
const subPage = new SubscriptionPage();
const expectedMinOrderMsgText =
  "Minimum order of $50.00 required; please add more items to this order prior to September 03.";
const expectedOnHoldText = "ON HOLD";

describe("[Grocer Key] Go to grocer key's homepage, Login and goto MSI page and verify Next Order tab elements", function () {
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
    page.loginUser(data.tempEmail, data.tempPassword);
  });

  it("should goto My Subscription page", async () => {
    page.open(data.mySubscriptionsUrl);
  });

  it("should open Next Order Tab on MSI page", async () => {
    msi.gotoNextOrderTab();
  });

  it("should display On Hold text", async () => {
    expect(await msi.getOnHoldText()).toBe(expectedOnHoldText);
  });

  it("should display proper error message for minimum order requirement", async () => {
    expect(await msi.getMinOrderMsg()).toBe(expectedMinOrderMsgText);
  });

  it("should redirect user to MSI screen when MANAGE button is clicked", async () => {
    expect(await msi.addMoreItemBtnIsDisplayed()).toBe(true);
  });
});
