import {} from "jasmine";
import { ProductPage } from "../../pom/burts-bees/product-page.pom";
import { SubscriptionPage } from "../../pom/burts-bees/subscription-page.pom";
import { browser } from "protractor";

const data = browser.params.bbData;
const page = new ProductPage();
const subPage = new SubscriptionPage();

describe("[BurtsBees] - Check Duplicate Shippings Should Not Be Displayed for Authenticated User with Active Subscriptions", function () {
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

  it("should verify that free shipping radio button is clickable", async () => {
    page.clickSubscribeRadioAuto();
  });

  it("should click Next Delivery Button", async () => {
    page.clickNextDeliveryBtn();
  });

  it("should open Subscriptions page", async () => {
    page.open(data.mySubscriptionsUrl);
  });

  it("should verify verify duplicate shipments should not be displayed", async () => {
    expect(await msi.shipmentMsgIsDisplayed()).toBe(false);
  });

  it("should execute test cleanup method", async () => {
    msi.removeMySubscription();
  });
});
