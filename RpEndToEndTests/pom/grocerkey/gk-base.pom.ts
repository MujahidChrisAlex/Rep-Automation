import { browser, element, by, protractor } from "protractor";
import { Base } from "../base.pom";
import { constants } from "../../constants";

const EC = protractor.ExpectedConditions;

export abstract class GKBase extends Base {
  private chooseBtn = element(
    by.css("div:nth-child(2) > button.btn.primary-btn.store-select-option-btn")
  );
  private chooseStoreBtn = element(by.css(".au-target compose:nth-child(4) button"));
  private logInBtn = element(by.css(".main-header-account span.main-header-group-title"));
  private startShopBtn = element(
    by.css("store-selector > section > div > button")
  );

  public clickChooseBtn() {
    browser.wait(EC.presenceOf(this.chooseBtn), constants.PRESENCE_TIMEOUT);
    this.chooseBtn.click();

    return this;
  }

  public clickChooseStoreBtn() {
    browser.wait(
      EC.presenceOf(this.chooseStoreBtn),
      constants.PRESENCE_TIMEOUT
    );
    this.chooseStoreBtn.click();
    browser.sleep(constants.PAUSE); 

    return this;
  }

  public clickLogInBtn() {
    browser.sleep(constants.WAIT); 
    browser.wait(EC.presenceOf(this.logInBtn), constants.PRESENCE_TIMEOUT);
    this.logInBtn.click();

    return this;
  }

  public clickStartShopping() {
    browser.wait(EC.presenceOf(this.startShopBtn), constants.PRESENCE_TIMEOUT);
    this.startShopBtn.click();

    return this;
  }
}
