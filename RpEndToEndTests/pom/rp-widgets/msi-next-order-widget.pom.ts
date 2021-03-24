import { browser, element, protractor, by } from "protractor";
import { constants } from "../../constants";
import { MsiNav } from "./msi-nav.pom";
const EC = protractor.ExpectedConditions;

export class MsiNextOrderWidget {
  private nav: MsiNav;
  private cancelSubBtn = element(by.css("app-cancel-subscription form button"));
  private cancelSubLink = element(
    by.xpath(
      '//*[@id="rp-container"]/div/div[2]/app-manage/div/div/form/div[2]/div[4]/p'
    )
  );
  private cancelSubReason = element(by.css("#inputState option:nth-child(3)"));
  private changeNextDelivery = element(by.name("date"));
  private changeOrderDate = element(
    by.css(".order-sm-last.order-lg-first small")
  );
  private currentDate = element.all(
    by.className("ngb-dp-day ng-star-inserted")
  );
  private manageLink = element(
    by.css(".next-order-item__manage-desktop .item-management__manage a")
  );
  private mySubscriptionMenu = element(
    by.css("#account-nav li:nth-child(7) a")
  );
  private orderOldDate = element(
    by.className("my-0 pr-0 ng-tns-c3-1 ng-star-inserted")
  );
  private productLblNext = element(by.className("product-detail__title"));
  private saveBtn = element(
    by.css(".col-sm-3.col-6.pr-5.text-sm-right.text-center button")
  );
  private selectDate = element(
    by.css("ngb-datepicker-month-view div:nth-child(3) div:nth-child(2) div")
  );
  private selectMonth = element.all(
    by.css("select:nth-child(1) option:nth-child(12)")
  );
  private selectYear = element(
    by.css(
      "ngb-datepicker-navigation-select select:nth-child(2) option:nth-child(1)"
    )
  );
  private sendMeDropdown = element(by.name("quantity")).all(
    by.tagName("option")
  );
  private shipmentMsg = element(by.css("#order-0-header h5"));
  private skipDeliveryLnk = element(by.id("next-order__skip-delivery"));
  private skipDeliveryConfirm = element(by.id("skipButtonDesktop"));
  private skipDeliverySuccess = element(
    by.className("text-sm-right text-center ng-tns-c3-1 ng-star-inserted")
  );
  private updatedMsg = element(
    by.css(".col-sm-8.ml-lg-3.mx-sm-auto.px-sm-0 div:nth-child(3)")
  );
  private weekDropdown = element(by.name("frequency")).all(
    by.tagName("option")
  );

  constructor() {
    this.nav = new MsiNav();
  }

  public clickChangeNextDelivery() {
    browser.executeScript("window.scrollTo(0,0);");
    browser.wait(
      EC.presenceOf(this.changeNextDelivery),
      constants.PRESENCE_TIMEOUT
    );
    this.changeNextDelivery.click();

    return this;
  }

  public clickChangeOrderDateLnk() {
    browser.wait(
      EC.presenceOf(this.changeOrderDate),
      constants.PRESENCE_TIMEOUT
    );
    browser.actions().mouseMove(this.changeOrderDate).perform();
    this.changeOrderDate.click();

    return this;
  }

  public clickConfirmSkipDeliveryLnk() {
    this.skipDeliveryConfirm.click();

    return this;
  }

  public async clickCurrentDate() {
    this.currentDate.last().click();
    browser.sleep(constants.WAIT);

    return this;
  }

  public clickManageLnk() {
    browser.executeScript("window.scrollTo(94,188);");
    browser.wait(EC.presenceOf(this.manageLink), constants.PRESENCE_TIMEOUT);
    this.manageLink.click();

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

  public clickSendMeDropdown() {
    browser.sleep(constants.PAUSE);
    this.sendMeDropdown
      .count()
      .then(function (numberOfItems) {
        return Math.floor(Math.random() * numberOfItems);
      })
      .then((randomNumber) => {
        return this.sendMeDropdown.get(randomNumber).click();
      });
  }

  public clickSkipDeliveryLnk() {
    browser.wait(
      EC.presenceOf(this.skipDeliveryLnk),
      constants.PRESENCE_TIMEOUT
    );
    this.skipDeliveryLnk.click();

    return this;
  }

  public clickWeekDropdown() {
    browser.sleep(constants.WAIT);
    this.weekDropdown
      .count()
      .then(function (numberOfItems) {
        return Math.floor(Math.random() * numberOfItems);
      })
      .then((randomNumber) => {
        return this.weekDropdown.get(randomNumber).click();
      });
  }

  public getNextOrderTabProductLabelText() {
    browser.wait(
      EC.presenceOf(this.productLblNext),
      constants.PRESENCE_TIMEOUT
    );

    return this.productLblNext.getText();
  }

  public async getChangeOrderDate() {
    var text = await this.orderOldDate.getText();
    text = text.split(":")[1];
    var parts = text.split("/");
    var dateA = parts[0] + "-" + parts[1] + "-" + parts[2];
    var changeOrderDate = new Date(dateA);
    dateA.split("T")[0];

    return changeOrderDate;
  }

  public async getSkipDeliveryDate() {
    var text = await this.orderOldDate.getText();
    text = text.split(":")[1];
    var parts = text.split("/");
    var dateB = parts[0] + "-" + parts[1] + "-" + parts[2];
    var skipDate = new Date(dateB);
    dateB.split("T")[0];

    return skipDate;
  }

  public getSkipDeliverySuccessMsg() {
    browser.wait(
      EC.presenceOf(this.skipDeliverySuccess),
      constants.PRESENCE_TIMEOUT
    );

    return this.skipDeliverySuccess.getText();
  }

  public getUpdateMessageText() {
    browser.wait(EC.presenceOf(this.updatedMsg), constants.PRESENCE_TIMEOUT);

    return this.updatedMsg.getText();
  }

  public gotoListTab() {
    return this.nav.gotoListTab();
  }

  public removeMySubscription() {
    browser.wait(EC.presenceOf(this.manageLink), constants.PRESENCE_TIMEOUT);
    this.manageLink.click();
    browser.wait(EC.presenceOf(this.cancelSubLink), constants.PRESENCE_TIMEOUT);
    this.cancelSubLink.click();
    browser.sleep(constants.WAIT);
    browser.actions().mouseMove(this.saveBtn).perform();
    browser.sleep(constants.WAIT);
    this.cancelSubReason.click();
    browser.wait(EC.presenceOf(this.cancelSubBtn), constants.PRESENCE_TIMEOUT);
    this.cancelSubBtn.click();
    browser.sleep(constants.WAIT);

    return this;
  }

  public setRevertedDate() {
    browser.executeScript("window.scrollTo(0,0);");
    browser.sleep(constants.PAUSE);
    this.selectYear.click();
    this.selectMonth.click();
    this.selectDate.click();
    browser.sleep(constants.PAUSE);
    this.saveBtn.click();
    browser.sleep(constants.WAIT);

    return this;
  }

  public shipmentMsgIsDisplayed() {
    browser.sleep(constants.WAIT);

    return this.shipmentMsg.isPresent();
  }
}
