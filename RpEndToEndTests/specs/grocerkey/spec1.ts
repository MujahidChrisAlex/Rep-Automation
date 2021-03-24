import {} from "jasmine";
import { LoginPage } from "../../pom/grocerkey/login-page.pom";
import { browser } from "protractor";

const data = browser.params.gkData;
const page = new LoginPage();

describe("[Grocer Key] Go to grocer key's homepage and Login with authenticated user credentials", function () {
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
    page.clickChooseCartBtn();
  });
});
