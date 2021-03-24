import {} from "jasmine";
import { ProductPage } from "../../pom/renewlife/product-page.pom";
import { LoginPage } from "../../pom/renewlife/login-page.pom";
import { SubscriptionPage } from "../../pom/renewlife/subscription-page.pom";
import { browser } from "protractor";
import { constants } from "../../constants";

const data = browser.params.rlData;
const page = new ProductPage();
const loginPage = new LoginPage();
const subPage = new SubscriptionPage();
const expectedMessageText = "Updated";
const expectedSendNowMessageText =
  "Your order is being processed. It will arrive in 2-5 business days.";

describe("[Renew Life] - should access Renewlife login page", function () {
  var msi: any = subPage.msiWidget;

  page.open(data.homePageUrl);
  browser.sleep(constants.WAIT);
  page.open(data.loginPageUrl).clickAcceptCookieBtn();

  it("should enter valid credentials", async () => {
    await loginPage.loginUser(data.productionEmail, data.productionPassword);
  });

  it("should goto My Subscriptions page", async () => {
    msi.clickMySubscriptionsMenu();
  });

  it("should click List option/tab", async () => {
    msi = msi.gotoListTab();
  });

  it("should click Reactivate button to reactivate the subscription and click confirm", async () => {
    msi.clickReactiveBtn();
    msi.clickConfirmReactivateBtn();
  });

  it("should open Subscription module", async () => {
    msi = msi.gotoNextOrderTab();
  });

  it("should change Send Me drop down value", async () => {
    msi.clickSendMeDropdown();
  });

  it("should display Send Me UPDATE message", async () => {
    expect(await msi.getUpdateMessageText()).toBe(expectedMessageText);
  });

  it("should change Every week drop down value", async () => {
    msi.clickWeekDropdown();
  });

  it("should display Every Week UPDATE message", async () => {
    expect(await msi.getUpdateMessageText()).toBe(expectedMessageText);
  });

  it("should click List option/tab", async () => {
    msi = msi.gotoListTab();
  });

  it("should verify that subscription Next Order date changed according to the frequency", async () => {
    var DateBeforeSnooze = msi.getSnoozeDate();
    msi.clickSnoozeDates();
    expect<any>(DateBeforeSnooze).toBeLessThanOrEqual(msi.getSnoozeDate());
  });

  it("should click Send Now and Confirm button", async () => {
    msi.clickSendNowBtn();
  });

  it("should display Send Now Success message, should Go to Next Order tab and Ensure item is visible in today's order", async () => {
    expect(await msi.getSendNowSuccessMsg()).toBe(expectedSendNowMessageText);
  });

  it("should verify that Send Now item must appear on Next Order Tab", async () => {
    var productTitle = msi.getListTabProductLabelText();
    msi = msi.gotoNextOrderTab();
    expect<any>(productTitle).toBe(msi.getNextOrderTabProductLabelText());
  });

  it("should Deactivate the order subscription", async () => {
    page.open(data.mySubscriptionsUrl);
    msi.removeMySubscription();
  });
});
