import { browser, element, protractor, by } from "protractor";
import { GKBase } from "./gk-base.pom";
import { constants } from "../../constants";
const EC = protractor.ExpectedConditions;

export class RegisterPage extends GKBase {
  private confirmPasswordTxt = element(
    by.css("section form div:nth-child(7) input")
  );
  private createAccountBtn = element(by.css("section form button"));
  private firstNameTxt = element(by.css("section form div:nth-child(2) input"));
  private lastNameTxt = element(by.css("section form div:nth-child(3) input"));
  private mailTxt = element(by.css("section form div:nth-child(5) input"));
  private phoneTxt = element(by.css("section form div:nth-child(8) input"));
  private regPasswordTxt = element(
    by.css("section form div:nth-child(6) input")
  );

  public registerUser(
    firstName: string,
    lastName: string,
    registerEmail: string,
    password: string,
    phone: string
  ) {
    browser.wait(EC.presenceOf(this.firstNameTxt), constants.PRESENCE_TIMEOUT);
    this.firstNameTxt.sendKeys(firstName);
    this.lastNameTxt.sendKeys(lastName);
    this.mailTxt.sendKeys(registerEmail);
    this.regPasswordTxt.sendKeys(password);
    this.confirmPasswordTxt.sendKeys(password);
    this.phoneTxt.sendKeys(phone);
    browser.actions().mouseMove(this.createAccountBtn).perform();
    this.createAccountBtn.click();
    browser.sleep(constants.WAIT);

    return this;
  }
}
