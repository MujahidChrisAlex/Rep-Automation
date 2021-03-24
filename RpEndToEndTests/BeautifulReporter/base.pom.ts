import { browser, protractor, element, by } from "protractor";
import { constants } from "../constants";
const EC = protractor.ExpectedConditions;

export abstract class Base {
  public open(url: string) {
    browser.driver.manage().window().maximize();

    browser.driver
      .manage()
      .timeouts()
      .setScriptTimeout(constants.SCRIPT_TIMEOUT);
    browser.waitForAngularEnabled(false);
    browser.get(url);

    return this;
  }

  public pause(timeout?: number) {
    browser.wait(EC.presenceOf(element(by.css("#does-not-exist"))), timeout);
  }
}
