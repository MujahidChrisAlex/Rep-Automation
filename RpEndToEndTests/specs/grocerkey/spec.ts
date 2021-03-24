import {} from "jasmine";
import { RegisterPage } from "../../pom/grocerkey/register-page.pom";
import { LoginPage } from "../../pom/grocerkey/login-page.pom";
import { browser } from "protractor";

const data = browser.params.gkData;
const page = new RegisterPage();
const pageB = new LoginPage();
const date = new Date().getTime();

describe("[Grocer Key] Go to grocer key's homepage, enter user info. and register on site", function () {
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

  it("should click Register Link on the page", async () => {
    pageB.clickRegister();
  });

  it("should initiate new user registeration process", async () => {
    page.registerUser(
      data.firstName,
      data.lastName,
      data.registerEmail + date + data.registerEmailB,
      data.password,
      data.phone
    );
  });
});
