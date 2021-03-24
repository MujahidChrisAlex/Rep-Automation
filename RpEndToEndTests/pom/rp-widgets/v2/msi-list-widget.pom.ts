import { browser, element, protractor, by } from "protractor";
import { constants } from "../../../constants";
import { MsiNav } from "./msi-nav.pom";
const EC = protractor.ExpectedConditions;

export class MsiListWidget {
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
  private cancelReactiveReplishBtn = element(
    by.css("svg.svg-inline--fa.fa-times.fa-w-11")
  );
  private cancelRemoveFromOrderBtn = element(
    by.css("svg.svg-inline--fa.fa-w-11")
  );
  private cancelReplenishment = element(
    by.css("svg.svg-inline--fa.fa-trash-alt.fa-w-14")
  );
  private cancelSnoozeBtn = element(by.css("svg.svg-inline--fa.fa-w-11"));
  private confirmCancelReplenishmentBtn = element(
    by.css(".edit-sub__cancel-sub__cancel-dialog form button")
  );
  private confirmReactiveReplishBtn = element(
    by.css("svg.svg-inline--fa.fa-check.fa-w-16")
  );
  private confirmSnoozeBtn = element(
    by.css("svg.svg-inline--fa.fa-check.fa-w-16")
  );
  private deliveryDate = element
    .all(by.css(".subscription__status.ng-star-inserted"))
    .get(3);
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
  private onHoldTxt = element(
    by.css(".ng-star-inserted .next-order__alert--line1")
  );
  private reactiveReplishBtn = element(
    by.css(
      "button.rp-c-btn-primary.subscription__product-detail__reactivate__button--default"
    )
  );
  private reactiveReplenishConfirmMsg = element(
    by.css(
      "p.subscription__product-detail__reactivate__confirm--message.confirm--success"
    )
  );
  private reactiveReplenishSuccessMsg = element(
    by.css(
      "p.subscription__product-detail__reactivate__confirm--message.confirm--success"
    )
  );
  private replenishCancelSuccessMsg = element(
    by.css("p.cancel-dialog__text--header.u-font__bold")
  );
  private removeFromOrderBtn = element(
    by.css("button.subscription__buttons--remove__button")
  );
  private removeOrderConfirmation = element(
    by.css(
      ".ng-tns-c4-5.ng-trigger.ng-trigger-simpleFadeAnimation.ng-star-inserted p"
    )
  );
  private replenishEveryDropdown = element(by.name("frequencyUnit")).all(
    by.tagName("option")
  );
  private replenishEverySuccessMsg = element(
    by.css(".cancel-dialog__text .cancel-dialog__text--header.u-font__bold")
  );
  private selectRemoveFromOrderBtn = element(
    by.css("svg.svg-inline--fa.fa-check.fa-w-16")
  );
  private sendMeDropdown = element(by.name("quantity")).all(
    by.tagName("option")
  );
  private sendMeSuccessMsg = element(by.css("#loader p"));
  private sendMeValue = element(by.name("quantity"));
  private skipDeliveryBtn = element(
    by.css(".edit-sub__cancel-sub__cancel-dialog > div > button")
  );
  private skipDeliverySuccessMsg = element(
    by.css("p.cancel-dialog__text--header.u-font__bold")
  );
  private snoozeBtn = element(by.css("svg.svg-inline--fa.fa-clock.fa-w-16"));
  private snoozeOrderConfirmation = element(
    by.css("p.subscription__buttons--remove__confirm--message.confirm--success")
  );

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

  public clickCancelReactiveReplenishmentBtn() {
    browser.wait(
      EC.presenceOf(this.cancelReactiveReplishBtn),
      constants.PRESENCE_TIMEOUT
    );
    this.cancelReactiveReplishBtn.click();
    browser.sleep(constants.WAIT);
    return this;
  }

  public clickCancelRemoveFromOrderBtn() {
    this.cancelRemoveFromOrderBtn.click();
    browser.sleep(constants.PAUSE);
    return this;
  }

  public clickCancelReplenishment() {
    this.cancelReplenishment.click();
    browser.sleep(constants.WAIT);
    return this;
  }

  public clickCancelReplenishmentBtn() {
    browser.wait(
      EC.presenceOf(this.cancelReplenishment),
      constants.PRESENCE_TIMEOUT
    );
    this.cancelReplenishment.click();
    browser.sleep(constants.WAIT);
    return this;
  }

  public clickConfirmCancelReplenishmentBtn() {
    this.confirmCancelReplenishmentBtn.click();
    return this;
  }

  public clickConfirmReactiveReplenishmentBtn() {
    this.confirmReactiveReplishBtn.click();
    return this;
  }

  public clickConfirmRemoveFromOrderBtn() {
    this.selectRemoveFromOrderBtn.click();
    browser.sleep(constants.WAIT);
    return this;
  }

  public clickCancelSnoozeBtn() {
    this.cancelSnoozeBtn.click();
    browser.sleep(constants.PAUSE);
    return this;
  }

  public clickConfirmSnoozeBtn() {
    this.confirmSnoozeBtn.click();
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
    browser.sleep(constants.PAUSE);
  }

  public clickReactiveReplenishBtn() {
    this.reactiveReplishBtn.click();
    browser.sleep(constants.PAUSE);
    return this;
  }

  public clickRemoveFromOrderBtn() {
    browser.sleep(constants.WAIT);
    this.removeFromOrderBtn.click();
    browser.sleep(constants.WAIT);
    return this;
  }

  public clickReplenishEveryDropdown() {
    browser.executeScript("window.scrollTo(94,188);");
    browser.sleep(constants.PAUSE);
    var replenishEveryDropdown = element(by.name("frequencyUnit")).all(
      by.tagName("option")
    );
    this.replenishEveryDropdown
      .count()
      .then(function (numberOfItems) {
        return Math.floor(Math.random() * numberOfItems);
      })
      .then(function (randomNumber) {
        return replenishEveryDropdown.get(randomNumber).click();
      });
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

  public clickSkipDeliveryBtn() {
    browser.wait(
      EC.presenceOf(this.skipDeliveryBtn),
      constants.PRESENCE_TIMEOUT
    );
    this.skipDeliveryBtn.click();
    browser.sleep(constants.WAIT);
    return this;
  }

  public clickSnoozeBtn() {
    browser.sleep(constants.WAIT);
    this.snoozeBtn.click();
    browser.sleep(constants.WAIT);
    return this;
  }

  public confirmCancelReplenishmentBtnIsEnabled() {
    return this.confirmCancelReplenishmentBtn.isEnabled();
  }

  public getChangedSendMeValue() {
    browser.wait(EC.presenceOf(this.sendMeValue), constants.PRESENCE_TIMEOUT);

    return this.sendMeValue.getAttribute("option");
  }

  public getCancelReplenishSuccessMsg() {
    browser.wait(
      EC.presenceOf(this.replenishCancelSuccessMsg),
      constants.PRESENCE_TIMEOUT
    );

    return this.replenishCancelSuccessMsg.getText();
  }

  public getConfirmReactiveReplenishMsg() {
    browser.wait(
      EC.presenceOf(this.reactiveReplenishConfirmMsg),
      constants.PRESENCE_TIMEOUT
    );

    return this.reactiveReplenishConfirmMsg.getText();
  }

  public getOnHoldText() {
    browser.wait(EC.presenceOf(this.onHoldTxt), constants.PRESENCE_TIMEOUT);

    return this.onHoldTxt.getText();
  }

  public getMinOrderMsg() {
    browser.wait(EC.presenceOf(this.minOrderMsg), constants.PRESENCE_TIMEOUT);

    return this.minOrderMsg.getText();
  }

  public getManageSendMeSuccessMsg() {
    browser.sleep(constants.PAUSE);

    return this.manageSendMeSuccessMsg.getText();
  }

  public getManageWeekSuccessMsg() {
    browser.wait(
      EC.presenceOf(this.manageWeekSuccessMsg),
      constants.PRESENCE_TIMEOUT
    );

    return this.manageWeekSuccessMsg.getText();
  }

  public getReactiveReplenishSuccessMsg() {
    browser.wait(
      EC.presenceOf(this.reactiveReplenishSuccessMsg),
      constants.PRESENCE_TIMEOUT
    );

    return this.reactiveReplenishSuccessMsg.isPresent();
  }

  public getRemoveFromOrderConfirmationTxt() {
    browser.wait(
      EC.presenceOf(this.removeOrderConfirmation),
      constants.PRESENCE_TIMEOUT
    );

    return this.removeOrderConfirmation.getText();
  }

  public getReplenishEverySuccessMsg() {
    browser.wait(
      EC.presenceOf(this.replenishEverySuccessMsg),
      constants.PRESENCE_TIMEOUT
    );
    browser.sleep(constants.PAUSE);
    return this.replenishEverySuccessMsg.getText();
  }

  public getSendMeSuccessMsg() {
    browser.wait(
      EC.presenceOf(this.sendMeSuccessMsg),
      constants.PRESENCE_TIMEOUT
    );

    return this.sendMeSuccessMsg.getText();
  }

  public getSkipDeliveryDate() {
    return this.deliveryDate.getText();
  }

  public getSkipDeliverySuccessMsg() {
    browser.wait(
      EC.presenceOf(this.skipDeliverySuccessMsg),
      constants.PRESENCE_TIMEOUT
    );

    return this.skipDeliverySuccessMsg.isPresent();
  }

  public getSnoozeOrderConfirmationTxt() {
    browser.wait(
      EC.presenceOf(this.snoozeOrderConfirmation),
      constants.PRESENCE_TIMEOUT
    );

    return this.snoozeOrderConfirmation.getText();
  }

  public gotoListTab() {
    this.nav.gotoListTab();
    browser.sleep(constants.PAUSE);
    return this;
  }

  public gotoNextOrderTab() {
    return this.nav.gotoNextOrderTab();
  }

  public skipDeliveryBtnIsPresent() {
    browser.wait(
      EC.presenceOf(this.skipDeliveryBtn),
      constants.PRESENCE_TIMEOUT
    );
    return this.skipDeliveryBtn.isPresent();
  }
}
