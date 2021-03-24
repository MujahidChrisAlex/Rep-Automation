import {} from "jasmine";
import { RegisterPage } from "../../pom/burts-bees/register-page.pom";
import { browser } from "protractor";

const data = browser.params.bbData;
const page = new RegisterPage();
const date = new Date().getTime();

describe("[BurtsBees] Go to burt's bees registration page and complete user registration process", function () {
  page.open(data.registerPageUrl).clickOneTrustAccept();

  it("should initiate new user registeration process", async () => {
    page.registerUser(
      data.firstName,
      data.lastName,
      data.registerEmail + date + data.registerEmailB,
      data.password
    );
  });

  it("should signout user after successfull registration", async () => {
    page.signout();
  });
});
