import { browser, element, protractor, by } from "protractor";
import { constants } from "../../../constants";
import { MsiNav } from "./msi-nav.pom";
const EC = protractor.ExpectedConditions;

export class MsiNextOrderWidget {
  private nav: MsiNav;
  private addMoreItemBtn = element(
    by.css(".next-order__alert.ng-star-inserted button")
  );
  private cancelItemBtn = element(
    by.css(".u-font__bold.edit-sub__top-bar--cancel")
  );
  private cancelReason = element(
    by.css(".edit-sub__cancel-sub__cancel-dialog form option:nth-child(3)")
  );
  private cancelRemoveFromOrderBtn = element(
    by.css("svg.svg-inline--fa.fa-w-11")
  );
  private cancelReplenishment = element(
    by.css(".edit-sub__cancel-sub__cancel-dialog form button")
  );
  private confirmRemoveFromOrderBtn = element(
    by.css("svg.svg-inline--fa.fa-check.fa-w-16")
  );
  private onHoldTxt = element(
    by.css(".ng-star-inserted .next-order__alert--line1")
  );
  private manageBtn = element(by.css("svg.svg-inline--fa.fa-cog.fa-w-16"));
  private manageSendMeSuccessMsg = element(
    by.css(".ng-trigger-simpleFadeAnimation p")
  );
  private manageWeekSuccessMsg = element(
    by.css(".ng-trigger-simpleFadeAnimation p")
  );
  private minOrderMsg = element(
    by.css(".ng-star-inserted .next-order__alert--line2")
  );
  private monthsDropdown = element(by.name("frequency")).all(
    by.tagName("option")
  );
  private removeFromOrderBtn = element(
    by.css("button.subscription__buttons--remove__button")
  );
  private removeOrderConfirmation = element(
    by.css(".ng-trigger-simpleFadeAnimation.ng-star-inserted p")
  );
  private sendMeDropdown = element(by.name("quantity")).all(
    by.tagName("option")
  );
  private sendMeSuccessMsg = element(by.css("#loader p"));
  private sendMeValue = element(by.name("quantity"));

  constructor() {
    this.nav = new MsiNav();
  }

  public addMoreItemBtnIsDisplayed() {
    browser.wait(
      EC.presenceOf(this.addMoreItemBtn),
      constants.PRESENCE_TIMEOUT
    );

    return this.addMoreItemBtn.isDisplayed();
  }

  public clickCancelItemBtn() {
    this.cancelItemBtn.click();
    browser.sleep(constants.WAIT);
    return this;
  }

  public clickCancelReason() {
    this.cancelReason.click();
    browser.sleep(constants.PAUSE);
    return this;
  }

  public clickCancelRemoveFromOrderBtn() {
    this.cancelRemoveFromOrderBtn.click();
    browser.sleep(constants.PAUSE);
    return this;
  }

  public clickCancelReplenishmentBtn() {
    this.cancelReplenishment.click();
    browser.sleep(constants.WAIT);
    return this;
  }

  public clickConfirmRemoveFromOrderBtn() {
    this.confirmRemoveFromOrderBtn.click();
    browser.sleep(constants.WAIT);
    return this;
  }

  public clickManageBtn() {
    browser.sleep(constants.WAIT);
    this.manageBtn.click();
    browser.sleep(constants.WAIT);
    return this;
  }

  public clickMonthsDropdown() {
    browser.sleep(constants.WAIT);
    var monthsDropdown = element(by.name("frequency")).all(
      by.tagName("option")
    );
    this.monthsDropdown
      .count()
      .then(function (numberOfItems) {
        return Math.floor(Math.random() * numberOfItems);
      })
      .then(function (randomNumber) {
        return monthsDropdown.get(randomNumber).click();
      });
  }

  public clickRemoveFromOrderBtn() {
    browser.sleep(constants.WAIT);
    this.removeFromOrderBtn.click();
    browser.sleep(constants.WAIT);
    return this;
  }

  public clickSendMeDropdown() {
    browser.sleep(constants.PAUSE);
    var sendMeDropdown = element(by.name("quantity")).all(by.tagName("option"));
    this.sendMeDropdown
      .count()
      .then(function (numberOfItems) {
        return Math.floor(Math.random() * numberOfItems);
      })
      .then(function (randomNumber) {
        return sendMeDropdown.get(randomNumber).click();
      });
  }

  public getChangedSendMeValue() {
    browser.wait(EC.presenceOf(this.sendMeValue), constants.PRESENCE_TIMEOUT);

    return this.sendMeValue.getAttribute("option");
  }

  public getOnHoldText() {
    browser.wait(EC.presenceOf(this.onHoldTxt), constants.PRESENCE_TIMEOUT);

    return this.onHoldTxt.getText();
  }

  public getMinOrderMsg() {
    browser.wait(EC.presenceOf(this.minOrderMsg), constants.PRESENCE_TIMEOUT);

    return this.minOrderMsg.getText();
  }

  public gotoCalendarTab() {
    return this.nav.gotoCalendarTab();
  }

  public gotoListTab() {
    return this.nav.gotoListTab();
  }

  public gotoNextOrderTab() {
    return this.nav.gotoNextOrderTab();
  }

  public getManageSendMeSuccessMsg() {
    browser.wait(
      EC.presenceOf(this.manageSendMeSuccessMsg),
      constants.PRESENCE_TIMEOUT
    );

    return this.manageSendMeSuccessMsg.isPresent();
  }

  public getManageWeekSuccessMsg() {
    browser.wait(
      EC.presenceOf(this.manageWeekSuccessMsg),
      constants.PRESENCE_TIMEOUT
    );

    return this.manageWeekSuccessMsg.isPresent();
  }

  public getRemoveFromOrderConfirmationTxt() {
    browser.wait(
      EC.presenceOf(this.removeOrderConfirmation),
      constants.PRESENCE_TIMEOUT
    );

    return this.removeOrderConfirmation.getText();
  }

  public getSendMeSuccessMsg() {
    browser.wait(
      EC.presenceOf(this.sendMeSuccessMsg),
      constants.PRESENCE_TIMEOUT
    );

    return this.sendMeSuccessMsg.getText();
  }
}
