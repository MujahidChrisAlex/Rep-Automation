import {} from "jasmine";
import { LoginPage } from "../../pom/grocerkey/login-page.pom";
import { SubscriptionPage } from "../../pom/grocerkey/subscription-page.pom";
import { browser } from "protractor";

const data = browser.params.gkData;
const page = new LoginPage();
const subPage = new SubscriptionPage();

describe("[Grocer Key] Go to grocer key's homepage, Login and goto MSI List Item page and verify CANCEL REPLENISHMENT functionality", function () {
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

  it("should verify that Confirm Cancel Replenish Button must be disabled by default", async () => {
    expect(await msi.confirmCancelReplenishmentBtnIsEnabled()).toBe(false);
  });

  it("should allow to change Replenish Every drop down value and display correct success message", async () => {
    msi.clickReplenishEveryDropdown();
    expect(await msi.getReplenishEverySuccessMsg()).toBe(true);
  });

  it("should click click Cancel Replenish button once again", async () => {
    msi.clickCancelReplenishmentBtn();
  });

  it("should select Cancellation Reason", async () => {
    msi.clickCancelReason();
  });

  it("should click confirm Cancel Replenishment Button", async () => {
    msi.clickConfirmCancelReplenishmentBtn();
  });

  it("should display correct Cancel Replenishment success message", async () => {
    expect(await msi.getCancelReplenishSuccessMsg()).toBe(true);
  });
});
