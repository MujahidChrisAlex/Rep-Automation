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
const expectedSuccessMessageText = "Your delivery has been skipped";

describe("[Renew Life] - should access Renewlife Subscription page, goto Next Order tab, Skip Delivery and verify success msg.", function () {
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

  it("should click Change Order Date Link", async () => {
    msi.clickSkipDeliveryLnk();
    msi.clickConfirmSkipDeliveryLnk();
  });

  it("should verify skip deivery success message should be displayed to user", async () => {
    expect(await msi.getSkipDeliverySuccessMsg()).toContain(
      expectedSuccessMessageText
    );
  });

  it("should change / set date to some future date and compare old and new order dates", async () => {
    var oldSkipDate = msi.getSkipDeliveryDate();
    msi.clickSkipDeliveryLnk();
    msi.clickConfirmSkipDeliveryLnk();
    expect<any>(oldSkipDate).toBeLessThanOrEqual(msi.getSkipDeliveryDate());
  });

  it("should click on Manage link on the page", async () => {
    msi.clickManageLnk();
  });

  it("should click on Change My Next Delivery Date Picker option", async () => {
    msi.clickChangeNextDelivery();
  });

  it("should set reverted date again and save", async () => {
    msi.setRevertedDate();
  });
});
