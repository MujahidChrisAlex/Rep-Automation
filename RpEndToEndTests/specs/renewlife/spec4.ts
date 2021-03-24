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
const expectedSuccessMessageText =
  "Success. This item will be included in your";

describe("[Renew Life] - should Login into Renewlife, goto Womens probiotics, select product and add product to bag as Anonymous user", function () {
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

  it("should verify deliver subscribe once is selected by default", async () => {
    page.moveToSubscribeOnceRadio();
    expect(await page.subscribeOnceRadioIsSelected()).toBe(true);
  });

  it("should verify that frequency drop down is disabled at the moment", async () => {
    page.moveToAutoDeliveryFrequencyDropDown();
    expect<any>(page.autoDeliveryfrequencyDDIsEnabled()).toBe(false);
  });

  it("should verify that frequency drop down gets enabled when frequency radio option is clicked", async () => {
    page.clickSubscribeRadioAuto();
    expect<any>(page.orderDropDownIsEnabled()).toBe(true);
    expect<any>(page.freqDropDownIsEnabled()).toBe(true);
  });

  it("should select Order and Frequency from Auto Delivery section", async () => {
    page.selectOrderAndAutoDeliveryFrequency();
  });

  it("should verify success message is displayed to user", async () => {
    expect(await page.getSuccessMessageText()).toContain(
      expectedSuccessMessageText
    );
  });

  it("should open Subscription module and execute test cleanup method", async () => {
    page.open(data.mySubscriptionsUrl);
    msi.removeMySubscription();
  });
});
