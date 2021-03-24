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

describe("[Renew Life] - should access Renewlife login page, goto Womens probiotics, select product and add product to bag as Anonymous user", function () {
  var msi: any = subPage.msiWidget;

  page.open(data.homePageUrl);
  browser.sleep(constants.WAIT);
  page.open(data.loginPageUrl);
  page.clickAcceptCookieBtn();
  
  it("should enter valid credentials", async () => {
    await loginPage.loginUser(data.productionEmail, data.productionPassword);
  });

  it("should goto product page", async () => {
    page.open(data.productPageUrl);
  });

  it("should click frequency radio option", async () => {
    page.clickSubscribeRadioAuto();
  });

  it("should click Send with Next Auto Delivery Button", async () => {
    page.clickNextDeliveryBtn();
  });

  it("should open Subscription module and verify duplicate shipment is not created", async () => {
    page.open(data.mySubscriptionsUrl);
    expect(await msi.shipmentMsgIsDisplayed()).toBe(false);
  });

  it("should execute test cleanup method", async () => {
    msi.removeMySubscription();
  });
});
