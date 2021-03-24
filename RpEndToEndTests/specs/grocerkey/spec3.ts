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
    page.loginUser(data.email, data.password);
  });

  it("should select product and open the PDP", async () => {
    page.open(data.productPageUrl);
  });

  it("should add product to cart", async () => {
    pageB.clickAddToCartBtn();
  });

  it("should click replenish box and select Week from Every Week dropdown", async () => {
    pageB.clickReplenishCheckbox();
    pageB.selectReplenishWeek();
  });

  it("should move mouse to Side Cart and click Increase Quantity", async () => {
    pageB.moveMouseToSideCart();
    pageB.IncreaseQty();
  });

  it("should click checkout button", async () => {
    pageC.clickContinueCheckOutBtn();
  });

  it("should select delivery time and date", async () => {
    pageC.selectDeiveryTime();
  });

  it("should select delivery checkbox and click fulfillment popup button", async () => {
    pageC.clickPickupTab();
    pageC.selectDeliveryCheckbox();
  });

  it("should click Submit Order button", async () => {
    pageC.clickTermsAndConditionsCheckBox();
    pageC.clickSubmitOrderBtn();
  });

  it("should click Back Up button and display Order success message", async () => {
    pageC.clickSelectBackUpBtn();
    expect(await pageC.getOrderConfirmationMessage()).toBe(
      expectedOrderConfirmationText
    );
  });
});
