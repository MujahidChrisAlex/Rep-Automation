import { browser, element, protractor, by } from "protractor";
import { BBBase } from "./bb-base.pom";
import { constants } from "../../constants";
const EC = protractor.ExpectedConditions;

export class RegisterPage extends BBBase {
  private confirmEmailTxt = element(
    by.css("#dwfrm_profile_customer_emailconfirm")
  );
  private confirmPasswordTxt = element(
    by.css("#dwfrm_profile_login_passwordconfirm")
  );
  private firstNameTxt = element(by.css("#dwfrm_profile_customer_firstname"));
  private lastNameTxt = element(by.css("#dwfrm_profile_customer_lastname"));
  private mailTxt = element(by.css("#dwfrm_profile_customer_email"));
  private regPasswordTxt = element(by.css("#dwfrm_profile_login_password"));
  private signupBtn = element(by.css("#cmApply"));
  private termsBox = element(
    by.css("#lbl_dwfrm_profile_customer_termsandconditions")
  );

  public registerUser(
    firstName: string,
    lastName: string,
    registerEmail: string,
    password: string
  ) {
    browser.wait(EC.presenceOf(this.firstNameTxt), constants.PRESENCE_TIMEOUT);
    this.firstNameTxt.sendKeys(firstName);
    this.lastNameTxt.sendKeys(lastName);
    this.mailTxt.sendKeys(registerEmail);
    this.confirmEmailTxt.sendKeys(registerEmail);
    this.regPasswordTxt.sendKeys(password);
    this.confirmPasswordTxt.sendKeys(password);
    this.termsBox.click();
    browser.actions().mouseMove(this.signupBtn).perform();
    this.signupBtn.click();

    return this;
  }
}
