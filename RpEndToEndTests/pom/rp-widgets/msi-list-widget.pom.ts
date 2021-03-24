import { browser, element, protractor, by } from "protractor";
import { constants } from "../../constants";
import { MsiNav } from "./msi-nav.pom";
const EC = protractor.ExpectedConditions;

export class MsiListWidget {
  private nav: MsiNav;
  private confirmBtn = element(by.id("list-item__reactivate-button"));
  private mySubscriptionMenu = element(
    by.css("#account-nav li:nth-child(7) a")
  );
  private productLblList = element(by.className("product-detail__title"));
  private reActiveBtn = element(by.buttonText("Reactivate"));
  private saveBtn = element(
    by.css(".col-sm-3.col-6.pr-5.text-sm-right.text-center button")
  );
  private selectDate = element(
    by.css("ngb-datepicker-month-view div:nth-child(3) div:nth-child(2) div")
  );
  private selectMonth = element(
    by.css("select:nth-child(1) option:nth-child(3)")
  );
  private selectYear = element(
    by.css(
      "ngb-datepicker-navigation-select select:nth-child(2) option:nth-child(1)"
    )
  );
  private sendNowBtn = element(by.id("list-item__button"));
  private sendNowConfirmMsg = element(
    by.xpath('//*[@id="send-order-now__confirmation-bottom"]')
  );
  private snoozeBtn = element(by.id("list-item__snooze-button"));
  private snoozeDate = element(by.id("list-item__date"));

  constructor() {
    this.nav = new MsiNav();
  }

  public clickConfirmReactivateBtn() {
    this.confirmBtn.click();

    return this;
  }

  public clickMySubscriptionsMenu() {
    browser.wait(
      EC.presenceOf(this.mySubscriptionMenu),
      constants.PRESENCE_TIMEOUT
    );
    this.mySubscriptionMenu.click();

    return this;
  }

  public clickReactiveBtn() {
    browser.wait(EC.presenceOf(this.reActiveBtn), constants.PRESENCE_TIMEOUT);
    browser.actions().mouseMove(this.reActiveBtn).perform();
    this.reActiveBtn.click();
    browser.sleep(constants.PAUSE);

    return this;
  }

  public clickSendNowBtn() {
    browser.wait(EC.presenceOf(this.sendNowBtn), constants.PRESENCE_TIMEOUT);
    browser.actions().doubleClick(this.sendNowBtn).perform();
    browser.sleep(constants.PAUSE);

    return this;
  }

  public clickSnoozeDates() {
    browser.wait(EC.presenceOf(this.snoozeBtn), constants.PRESENCE_TIMEOUT);
    browser.actions().doubleClick(this.snoozeBtn).perform();

    return this;
  }

  public getListTabProductLabelText() {
    browser.wait(
      EC.presenceOf(this.productLblList),
      constants.PRESENCE_TIMEOUT
    );

    return this.productLblList.getText();
  }

  public getSendNowSuccessMsg() {
    browser.wait(
      EC.presenceOf(this.sendNowConfirmMsg),
      constants.PRESENCE_TIMEOUT
    );
    return this.sendNowConfirmMsg.getText();
  }

  public getSnoozeDate() {
    browser.wait(EC.presenceOf(this.snoozeDate), constants.PRESENCE_TIMEOUT);
    browser.actions().mouseMove(this.snoozeDate).perform();
    browser.sleep(constants.PAUSE);
    return this.snoozeDate.getText();
  }

  public gotoNextOrderTab() {
    return this.nav.gotoNextOrderTab();
  }

  public setRevertedDate() {
    this.selectYear.click();
    this.selectMonth.click();
    this.selectDate.click();
    browser.sleep(constants.PAUSE);
    this.saveBtn.click();
    browser.sleep(constants.WAIT);

    return this;
  }
}
