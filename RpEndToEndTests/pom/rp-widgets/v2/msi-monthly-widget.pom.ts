import { browser, element, protractor, by } from "protractor";
import { constants } from "../../../constants";
import { MsiNav } from "./msi-nav.pom";
const EC = protractor.ExpectedConditions;

export class MsiMonthlyWidget {
  private nav: MsiNav;
  private currentDate = element(by.css(".orders-monthly__header p"));
  private monthlyOrderDate = element(by.css(".orders-monthly__wrapper li"));
  private nextBtn = element(by.css(".orders-monthly__next.u-text__right"));
  private nextOrderDateLabel = element(
    by.css(".next-order__order-date.ng-star-inserted p")
  );
  private previousBtn = element(
    by.css(".orders-monthly__previous.u-text__left")
  );

  constructor() {
    this.nav = new MsiNav();
  }

  public clickMonthlyOrderDateBtn() {
    this.monthlyOrderDate.click();
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

  public convertMonthNameToNumber() {
    this.previousBtn.click();
    browser.sleep(constants.PAUSE);
    return this;
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

  public getDays() {
    var days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    return days;
  }

  public getMonthsCount() {
    browser.sleep(constants.WAIT);
    var months = element.all(by.css(".orders-monthly__header p"));

    return months.count();
  }

  public getMonthlyOrderDate() {
    browser.wait(
      EC.presenceOf(this.monthlyOrderDate),
      constants.PRESENCE_TIMEOUT
    );

    return this.monthlyOrderDate.getText();
  }

  public async getMonthlyOrderDay() {
    browser.wait(
      EC.presenceOf(this.monthlyOrderDate),
      constants.PRESENCE_TIMEOUT
    );

    const str = this.monthlyOrderDate.getText();
    const words = (await str).split(" ");
    const day = words[0];

    return day;
  }

  public async getMonthName() {
    const strA = this.monthlyOrderDate.getText();
    const words = (await strA).split(" ");
    const d = words[1];
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
    var ds = new Date(d);
    var monthName = months[ds.getMonth()];
    console.log(monthName);

    return monthName;
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
    var nextMonth = months[d.getMonth() + 6];

    return nextMonth;
  }

  public getNextOrderDateLabelTxt() {
    browser.wait(
      EC.presenceOf(this.nextOrderDateLabel),
      constants.PRESENCE_TIMEOUT
    );

    return this.nextOrderDateLabel.getText();
  }

  public async getNumberOfItems() {
    const strA = this.monthlyOrderDate.getText();
    const words = (await strA).split(" ");
    const numberItems = words[3];

    return numberItems;
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
    var previousMonth = months[d.getMonth() - 6];

    return previousMonth;
  }

  public gotoMonthlyTab() {
    return this.nav.gotoMonthlyTab();
  }

  public gotoNextOrderTab() {
    return this.nav.gotoNextOrderTab();
  }

  public verifyPreviousBtnIsDisabled() {
    browser.wait(EC.presenceOf(this.previousBtn), constants.PRESENCE_TIMEOUT);

    return this.previousBtn.isEnabled();
  }
}
