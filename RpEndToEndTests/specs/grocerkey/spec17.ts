import {} from "jasmine";
import { LoginPage } from "../../pom/grocerkey/login-page.pom";
import { SubscriptionPage } from "../../pom/grocerkey/subscription-page.pom";
import { browser } from "protractor";

const data = browser.params.gkData;
const page = new LoginPage();
const subPage = new SubscriptionPage();

describe("[Grocer Key] Go to grocer key's homepage, Login and goto MSI List Item page and verify Reactivate Replenishment functionality", function () {
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

  it("should open List Item Tab on MSI page and click Reactivate Replenish button again", async () => {
    msi = msi.gotoListTab();
    msi.clickReactiveReplenishBtn();
  });

  it("should verify that correct Reactivation confirmation message is displayed", async () => {
    expect(await msi.getConfirmReactiveReplenishMsg()).toBe(true);
  });

  it("should click close (x) button", async () => {
    msi.clickCancelReactiveReplenishmentBtn();
  });

  it("should click Reactivate Replenish button again", async () => {
    msi = msi.gotoListTab();
    msi.clickReactiveReplenishBtn();
  });

  it("should click confirm Reactivation button", async () => {
    msi.clickConfirmReactiveReplenishmentBtn();
  });

  it("should verify that correct Reactivation success message is displayed", async () => {
    expect(await msi.getReactiveReplenishSuccessMsg()).toBe(true);
  });
});
