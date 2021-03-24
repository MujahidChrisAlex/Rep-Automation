import { browser, element, protractor, by } from "protractor";
import { constants } from "../../../constants";
const EC = protractor.ExpectedConditions;

export class PdpWidget {
  private addToCartBtn = element(
    by.css(".single-product-cart-section > div > div button:nth-child(2)")
  );
  private checkoutBtn = element(
    by.css(".cart-footer.primary-background button")
  );
  private checkoutBtnTxt = element(
    by.css(".primary-background span:nth-child(2)")
  );
  private everyWeekDropdown = element(
    by.css(".grocery__replenish div form select")
  );
  private everyWeekValue = element(
    by.css(".grocery__replenish div form select option:nth-child(9)")
  );
  private manageBtn = element(by.css(".grocery__subscribed--manage a"));
  private plusBtn = element(
    by.css(".cart-item-action.cart-item-increase.au-target")
  );
  private qtyBtn = element(by.css(".au-target.cart-item-count div button"));
  private replenishBox = element(by.css(".grocery__replenish form input"));
  private removeBtn = element(
    by.css(".cart-item-action.last-action-item span")
  );
  private replenishDate = element(
    by.css(".grocery__subscribed .grocery__subscribed--replenish-date")
  );
  private replenishTxt = element(by.css(".grocery__subscribed div p"));

  constructor() {}

  public clickAddToCartBtn() {
    this.addToCartBtn.click();
    browser.sleep(constants.WAIT);
    return this;
  }

  public clickManageBtn() {
    this.manageBtn.click();
    browser.sleep(constants.WAIT);
    return this;
  }

  public clickReplenishCheckbox() {
    this.replenishBox.click();
    return this;
  }

  public getSubscriptionText() {
    browser.sleep(constants.WAIT);
    browser.wait(EC.presenceOf(this.replenishTxt), constants.PRESENCE_TIMEOUT);
    return this.replenishTxt.getText();
  }

  public IncreaseQty() {
    var abc = this.checkoutBtnTxt.getText();
    for (var a = 0; a < 5; a++) {
      expect(abc).toContain("Need");
      this.plusBtn.click();
    }
    this.checkoutBtn.click();

    return this;
  }
  public moveMouseToSideCart() {
    browser.sleep(constants.WAIT);
    browser.actions().mouseMove(this.qtyBtn).perform();
    return this;
  }

  public removeProductFromCart() {
    browser.sleep(constants.WAIT);
    browser.actions().mouseMove(this.qtyBtn).perform();
    browser.wait(EC.presenceOf(this.removeBtn), constants.PRESENCE_TIMEOUT);
    this.removeBtn.click();
    browser.sleep(constants.WAIT);
    return this;
  }

  public repleniumWidgetIsPresent() {
    browser.sleep(constants.PAUSE);
    browser.wait(EC.presenceOf(this.replenishBox), constants.PRESENCE_TIMEOUT);
    return this.replenishBox.isPresent();
  }

  public selectReplenishWeek() {
    this.everyWeekDropdown.click();
    browser.sleep(constants.PAUSE);
    this.everyWeekValue.click();
    return this;
  }

  public subDateIsDisplayed() {
    return this.replenishDate.isDisplayed();
  }
}
