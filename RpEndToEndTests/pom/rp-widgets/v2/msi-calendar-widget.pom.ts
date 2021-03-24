import { browser, element, protractor, by } from "protractor";
import { constants } from "../../../constants";
import { MsiNav } from "./msi-nav.pom";
const EC = protractor.ExpectedConditions;

export class MsiCalendarWidget {
  private nav: MsiNav;
  private calendarCell = element(
    by.css(".cal-has-events.ng-star-inserted .cal-day-number")
  );
  private currentDate = element(by.css(".daily__top-bar--current-month p"));
  private ItemBtn = element(
    by.css(".cal-day-badge.ng-star-inserted .cal-day-badge-total")
  );
  private nextBtn = element(by.css(".daily__top-bar--next-month button"));
  private previousBtn = element(
    by.css(".daily__top-bar--previous-month button")
  );
  private replenishDate = element(by.css(".checkout__deliver-on--date span"));

  constructor() {
    this.nav = new MsiNav();
  }

  public clickItemBtn() {
    this.ItemBtn.click();
    browser.sleep(constants.PAUSE);
    return this;
  }

  public clickNextBtn() {
    this.nextBtn.click();
    browser.sleep(constants.PAUSE);
    return this;
  }

  public clickPreviousBtn() {
    this.previousBtn.click();
    browser.sleep(constants.PAUSE);
    return this;
  }

  public getCalendarCellTextDate() {
    browser.wait(EC.presenceOf(this.calendarCell), constants.PRESENCE_TIMEOUT);

    return this.calendarCell.getText();
  }

  public getCurrentDate() {
    browser.wait(EC.presenceOf(this.currentDate), constants.PRESENCE_TIMEOUT);

    return this.currentDate.getText();
  }

  public getCurrentMonth() {
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var d = new Date();
    var currentMonth = months[d.getMonth()];

    return currentMonth;
  }

  public getCurrentYear() {
    var d = new Date();
    var currentYear = d.getFullYear();

    return currentYear;
  }

  public getItemBtnText() {
    browser.wait(EC.presenceOf(this.ItemBtn), constants.PRESENCE_TIMEOUT);

    return this.ItemBtn.getText();
  }

  public getNextMonth() {
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var d = new Date();
    var nextMonth = months[d.getMonth() + 1];

    return nextMonth;
  }

  public getPreviousMonth() {
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var d = new Date();
    var previousMonth = months[d.getMonth() - 1];

    return previousMonth;
  }

  public getProductCount() {
    browser.sleep(constants.WAIT);
    var qa = element.all(
      by.css(".subscription__product-detail__info div:nth-child(1) p")
    );

    return qa.count();
  }

  public getReplenishDate() {
    browser.wait(EC.presenceOf(this.replenishDate), constants.PRESENCE_TIMEOUT);

    return this.replenishDate.getText();
  }

  public gotoCalendarTab() {
    return this.nav.gotoCalendarTab();
  }
}
