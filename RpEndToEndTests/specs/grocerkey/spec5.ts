import {} from "jasmine";
import { LoginPage } from "../../pom/grocerkey/login-page.pom";
import { ProductPage } from "../../pom/grocerkey/product-page.pom";
import { browser } from "protractor";

const data = browser.params.gkData;
const page = new LoginPage();
const pageB = new ProductPage();
const expectedSubscriptionText = "Subscribed!";

describe("[Grocer Key] Go to grocer key's homepage, Login and select product and verify that already subscribed product cannot be subscribed again", function () {
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

  it("should verify that replenium widget is present on the PDP", async () => {
    expect(await pageB.repleniumWidgetIsPresent()).toBe(false);
  });

  it("should display already subscribed product as SUBSCRIBED", async () => {
    expect(await pageB.getSubscriptionText()).toBe(
        expectedSubscriptionText
        );
  });

});
