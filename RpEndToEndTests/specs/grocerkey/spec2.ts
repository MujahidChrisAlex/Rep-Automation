import {} from "jasmine";
import { LoginPage } from "../../pom/grocerkey/login-page.pom";
import { ProductPage } from "../../pom/grocerkey/product-page.pom";
import { browser } from "protractor";

const data = browser.params.gkData;
const page = new LoginPage();
const pageB = new ProductPage();

describe("[Grocer Key] Go to grocer key's homepage and Login and Add product to Cart", function () {
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

  it("should close PDP and remove product from cart", async () => {
    pageB.removeProductFromCart();
  });
});
