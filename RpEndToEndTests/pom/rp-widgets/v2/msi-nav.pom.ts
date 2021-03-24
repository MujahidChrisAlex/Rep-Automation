import { browser, element, protractor, by } from "protractor";
import { constants } from "../../../constants";
import { MsiCalendarWidget } from "./msi-calendar-widget.pom";
import { MsiListWidget } from "./msi-list-widget.pom";
import { MsiMonthlyWidget } from "./msi-monthly-widget.pom";
import { MsiNextOrderWidget } from "./msi-next-order-widget.pom";
const EC = protractor.ExpectedConditions;

export class MsiNav {
  private calendarTab = element(
    by.css(".my-subscriptions__tabs .my-subscriptions__button--calendar")
  );
  private listTab = element(
    by.css(".my-subscriptions__tabs .my-subscriptions__button--list")
  );
  private monthlyTab = element(
    by.css(".my-subscriptions__tabs .my-subscriptions__button--monthly")
  );
  private nextOrderTab = element(
    by.css(".my-subscriptions__tabs .my-subscriptions__button--next-order")
  );

  constructor() {}

  public gotoCalendarTab() {
    browser.wait(EC.presenceOf(this.calendarTab), constants.PRESENCE_TIMEOUT);
    this.calendarTab.click();
    browser.sleep(constants.PAUSE);

    return new MsiCalendarWidget();
  }

  public gotoListTab() {
    browser.executeScript("window.scrollTo(0, 0);");
    browser.wait(EC.presenceOf(this.listTab), constants.PRESENCE_TIMEOUT);
    this.listTab.click();

    return new MsiListWidget();
  }

  public gotoMonthlyTab() {
    browser.wait(EC.presenceOf(this.monthlyTab), constants.PRESENCE_TIMEOUT);
    this.monthlyTab.click();
    browser.sleep(constants.PAUSE);

    return new MsiMonthlyWidget();
  }

  public gotoNextOrderTab() {
    browser.wait(EC.presenceOf(this.nextOrderTab), constants.PRESENCE_TIMEOUT);
    this.nextOrderTab.click();
    browser.sleep(constants.PAUSE);

    return new MsiNextOrderWidget();
  }
}
