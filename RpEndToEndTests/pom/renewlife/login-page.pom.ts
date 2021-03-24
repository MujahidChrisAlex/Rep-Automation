import { browser, element, by, protractor } from "protractor";
import { RLBase } from "./rl-base.pom";
import { constants } from "../../constants";
import { MyAccountPage } from "./my-account-page.pom";

const EC = protractor.ExpectedConditions;

export class LoginPage extends RLBase {
  private emailTxt = element(by.id("email"));
  private logoutBtn = element(by.xpath('//*[@id="logout-button"]'));
  private passTxt = element(by.id("pass"));
  private signinBtn = element(by.id("send2"));

  public loginUser(email: string, password: string) {
    browser.wait(EC.presenceOf(this.emailTxt), constants.PRESENCE_TIMEOUT);
    this.emailTxt.sendKeys(email);
    this.passTxt.sendKeys(password);
    this.signinBtn.click();
    browser.sleep(constants.WAIT);

    return new MyAccountPage();
  }

  public signout() {
    browser.wait(EC.presenceOf(this.logoutBtn), constants.PRESENCE_TIMEOUT);
    this.logoutBtn.click();

    return this;
  }
}
