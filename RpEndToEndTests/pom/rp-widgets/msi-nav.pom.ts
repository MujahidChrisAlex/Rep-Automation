import { browser, element, protractor, by } from "protractor";
import { constants } from "../../constants";
import { MsiListWidget } from "./msi-list-widget.pom";
import { MsiNextOrderWidget } from "./msi-next-order-widget.pom";
const EC = protractor.ExpectedConditions;

export class MsiNav {
  private listTab = element(by.css("#nav-item a"));
  private nextOrderTab = element(by.css("app-header-tabs li:nth-child(1) a"));

  constructor() {}

  public gotoListTab() {
    browser.executeScript("window.scrollTo(0, 0);");
    browser.wait(EC.presenceOf(this.listTab), constants.PRESENCE_TIMEOUT);
    this.listTab.click();

    return new MsiListWidget();
  }

  public gotoNextOrderTab() {
    browser.executeScript("window.scrollTo(0, 0);");
    browser.wait(EC.presenceOf(this.nextOrderTab), constants.PRESENCE_TIMEOUT);
    this.nextOrderTab.click();
    browser.sleep(constants.PAUSE);

    return new MsiNextOrderWidget();
  }
}
