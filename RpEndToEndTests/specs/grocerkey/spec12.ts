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

  it("should allow to change Send Me drop down value and display correct success message", async () => {
    msi.clickSendMeDropdown();
    expect(await msi.getManageSendMeSuccessMsg()).toBe(true);
  });

  it("should allow to change Every Week drop down value and display correct success message", async () => {
    msi.clickMonthsDropdown();
  });

  it("should open Next Order Tab on MSI page and compare changed Send Me Values, which should be same", async () => {
    var changed = msi.getChangedSendMeValue();
    msi.gotoNextOrderTab();
    expect<any>(changed).toBe(msi.getChangedSendMeValue());
  });

  it("should open MANAGE List Item Tab screen again", async () => {
    msi = msi.gotoListTab();
    msi.clickManageBtn();
  });

  it("should click Cancel Item button", async () => {
    msi.clickCancelItemBtn();
  });

  it("should select Cancellation Reason", async () => {
    msi.clickCancelReason();
  });

  it("should click Cancel Replenishment Button", async () => {
    msi.clickCancelReplenishmentBtn();
  });
});
