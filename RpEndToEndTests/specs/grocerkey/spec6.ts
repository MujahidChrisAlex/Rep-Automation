import {} from "jasmine";
import { LoginPage } from "../../pom/grocerkey/login-page.pom";
import { ProductPage } from "../../pom/grocerkey/product-page.pom";
import { CheckoutPage } from "../../pom/grocerkey/checkout-page.pom";
import { browser } from "protractor";

const data = browser.params.gkData;
const page = new LoginPage();
const pageB = new ProductPage();
const pageC = new CheckoutPage();
const expectedOrderConfirmationText = "Your order has been received";
const expectedSubscriptionText = "Subscribed!";
const expectedURL = "https://grocerkeydev.com/beloit#/myaccount/subscriptions";

describe("[Grocer Key] Go to grocer key's homepage, Login and select product and complete Checkout process", function () {
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

  it("should select product and open the PDP", async () => {
    page.open(data.productPageUrl);
  });

  it("should add product to cart", async () => {
    pageB.clickAddToCartBtn();
  });

  it("should display already subscribed product as SUBSCRIBED", async () => {
    expect(await pageB.getSubscriptionText()).toBe(expectedSubscriptionText);
  });

  it("should display Next Order Date", async () => {
    expect(await pageB.subDateIsDisplayed()).toBe(true);
  });

  it("should redirect user to MSI screen when MANAGE button is clicked", async () => {
    pageB.clickManageBtn();
    expect(await browser.getCurrentUrl()).toContain(expectedURL);
  });

  it("should select product and open the PDP", async () => {
    page.open(data.productPageUrl);
  });

  it("should add product to cart", async () => {
    pageB.clickAddToCartBtn();
  });

  it("should click checkout button and continue checkout button", async () => {
    pageC.clickCheckOutBtn();
    pageC.clickContinueCheckOutBtn();
  });

  it("should select delivery checkbox and click fulfillment popup button", async () => {
    pageC.selectPickupCheckbox();
  });

  it("should select delivery time and date", async () => {
    pageC.selectDeiveryTime();
  });

  it("should click Submit Order button", async () => {
    pageC.clickSubmitOrderBtn();
  });

  it("should click Back Up button and display Order success message", async () => {
    pageC.clickSelectBackUpBtn();
    expect(await pageC.getOrderConfirmationMessage()).toBe(
      expectedOrderConfirmationText
    );
  });
});
