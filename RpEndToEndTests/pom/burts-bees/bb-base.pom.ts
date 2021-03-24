import { browser, element, by, protractor } from "protractor";
import { Base } from "../base.pom";
import { constants } from "../../constants";

const EC = protractor.ExpectedConditions;

export abstract class BBBase extends Base {
  private emailTxt = element(by.css("#dialog-container #dwfrm_login_username"));
  private logoutBtn = element(by.xpath('//*[@id="logout-button"]'));
  private oneTrustAcceptBtn = element(
    by.css("#onetrust-close-btn-container button")
  );
  private passTxt = element(by.css("#dialog-container #dwfrm_login_password"));
  private signinBtn = element(by.css("#dialog-container #login"));
  private signInIcon = element(by.css("button#lnkheaderCreateAcc"));

  public clickOneTrustAccept() {
    browser.waitForAngularEnabled(false);
    browser.sleep(constants.WAIT);
    this.oneTrustAcceptBtn.click();

    return this;
  }

  public clickSignInIcon() {
    browser.sleep(constants.WAIT);
    browser.wait(EC.presenceOf(this.signInIcon), constants.PRESENCE_TIMEOUT);
    this.signInIcon.click();

    return this;
  }

  public loginUser(email: string, password: string) {
    browser.wait(EC.presenceOf(this.emailTxt), constants.PRESENCE_TIMEOUT);
    this.emailTxt.sendKeys(email);
    this.passTxt.sendKeys(password);
    this.signinBtn.click();
    browser.sleep(constants.WAIT);

    return this;
  }

  public signout() {
    browser.wait(EC.presenceOf(this.logoutBtn), constants.PRESENCE_TIMEOUT);
    this.logoutBtn.click();

    return this;
  }
}
