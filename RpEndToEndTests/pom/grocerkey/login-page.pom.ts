import { browser, element, by, protractor } from "protractor";
import { GKBase } from "./gk-base.pom";
import { constants } from "../../constants";

const EC = protractor.ExpectedConditions;

export class LoginPage extends GKBase {
  private chooseCartBtn = element(by.css("form div div:nth-child(2)"));
  private emailText = element(by.css("section form div:nth-child(1) input"));
  private loginBtn = element(by.css("section form button"));
  private passText = element(by.css("section form div:nth-child(2) input"));
  private registerBtn = element(by.css("section h1 a"));

  public clickChooseCartBtn() {
    browser.wait(EC.presenceOf(this.chooseCartBtn), constants.PRESENCE_TIMEOUT);
    this.chooseCartBtn.click();
    browser.sleep(constants.WAIT);

    return this;
  }

  public clickRegister() {
    browser.wait(EC.presenceOf(this.registerBtn), constants.PRESENCE_TIMEOUT);
    this.registerBtn.click();
    browser.sleep(constants.WAIT);

    return this;
  }

  public loginUser(email: string, password: string) {
    browser.wait(EC.presenceOf(this.emailText), constants.PRESENCE_TIMEOUT);
    this.emailText.sendKeys(email);
    this.passText.sendKeys(password);
    this.loginBtn.click();
    browser.sleep(constants.WAIT); 

    return this;
  }
}
