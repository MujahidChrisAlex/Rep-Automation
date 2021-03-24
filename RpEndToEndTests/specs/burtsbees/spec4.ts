import {} from "jasmine";
import { ProductPage } from "../../pom/burts-bees/product-page.pom";
import { SubscriptionPage } from "../../pom/burts-bees/subscription-page.pom";
import { browser } from "protractor";

const data = browser.params.bbData;
const page = new ProductPage();
const subPage = new SubscriptionPage();
const expectedSubscribeOnceText = "Deliver 1 time only";
const expectedSubscribText =
  "Get free shipping on auto-delivery orders over $10";
const expectedSuccessMessageText =
  "Success. This item will be included in your";

describe("[BurtsBees]- One Click Subscribe as Authenticated User who has Active Subscriptions available)", function () {
  var msi: any = subPage.msiWidget;

  page.open(data.homePageUrl).clickOneTrustAccept();

  it("should open login screen", async () => {
    page.clickSignInIcon();
  });

  it("should validate and login user successfully", async () => {
    page.loginUser(data.productionEmail, data.productionPassword);
  });

  it("should open product details page", async () => {
    page.open(data.productPageUrl);
  });

  it("should have unauthenticated subscribe once label", async () => {
    expect(await page.getSubscribeOnceLabelText()).toBe(
      expectedSubscribeOnceText
    );
  });

  it("should verify that free shipping radio button label is correct and it is clickable", async () => {
    page.clickSubscribeRadioAuto();
    expect(await page.getSubscribeLabelAutoText()).toBe(expectedSubscribText);
  });

  it("should verify that Auto delivery option is displayed", async () => {
    page.selectOrderAndAutoDeliveryFrequency();
  });

  it("should verify success message is displayed to user", async () => {
    expect(await page.getSuccessMessageText()).toContain(
      expectedSuccessMessageText
    );
  });

  it("should open Subscription module and execute test cleanup method", async () => {
    browser.waitForAngularEnabled(false);
    page.open(data.mySubscriptionsUrl);
    msi.removeMySubscription();
  });
});
