import { browser, element, by, protractor } from "protractor";
import { Base } from "../base.pom";
import { constants } from "../../constants";

const EC = protractor.ExpectedConditions;

export abstract class RLBase extends Base {
  private acceptCookiesBtn = element(
    by.xpath("//*[@id='onetrust-accept-btn-handler']")
  );
  private ContinueBtn = element(by.id("bx-element-1145216-KmqPQwN"));

  public clickAcceptCookieBtn() {
    browser.waitForAngularEnabled(false);
    browser.wait(
      EC.presenceOf(this.acceptCookiesBtn),
      constants.PRESENCE_TIMEOUT
    );
    if (this.acceptCookiesBtn.isDisplayed()) {
      this.acceptCookiesBtn.click();
    }
    return this;
  }

  public clickContinueBtn() {
    browser.waitForAngularEnabled(false);
    browser.wait(EC.presenceOf(this.ContinueBtn), constants.PRESENCE_TIMEOUT);
    this.ContinueBtn.click();

    return this;
  }
}
