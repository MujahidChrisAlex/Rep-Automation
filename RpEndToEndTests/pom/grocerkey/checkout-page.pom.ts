import { browser, element, by, protractor } from "protractor";
import { GKBase } from "./gk-base.pom";
import { constants } from "../../constants";

const EC = protractor.ExpectedConditions;

export class CheckoutPage extends GKBase {
  private checkOutBtn = element(
    by.css(".cart-footer.primary-background button")
  );
  private continueCheckoutBtn = element(
    by.css(".u_flex-space-between.u_margin-sides button")
  );
  private deliveryCheckbox = element(
    by.css("checkout-step-1 div:nth-child(2) span")
  );
  private fulfillmentCheckbox = element(
    by.css(".f-times-body div:nth-child(1) span.au-target.radio-box-icon")
  );
  private fulfillmentPopUpBtn = element(
    by.css("button.btn.primary-btn.ok.au-target")
  );
  private orderConfirmationTxt = element(by.css(".big-title-description span"));
  private pickupCheckbox = element(
    by.css("checkout-step-1 div:nth-child(1) span")
  );
  private pickupTab = element(
    by.css("section > div > div > div > div:nth-child(1) > button")
  );
  private selectBackUpBtn = element(
    by.css("ux-dialog ux-dialog-footer button")
  );
  private submitOrderBtn = element(by.css("aside compose:nth-child(4) button"));
  private termsAndConditionsCheckBox = element(by.css('aside terms-of-service label'));

  public clickCheckOutBtn() {
    this.checkOutBtn.click();

    return this;
  }

  public clickContinueCheckOutBtn() {
    browser.wait(
      EC.presenceOf(this.continueCheckoutBtn),
      constants.PRESENCE_TIMEOUT
    );
    this.continueCheckoutBtn.click();
    browser.sleep(constants.PAUSE);

    return this;
  }

  public clickFulfillmentPopUpBtn() {
    browser.wait(
      EC.presenceOf(this.fulfillmentPopUpBtn),
      constants.PRESENCE_TIMEOUT
    );
    this.fulfillmentPopUpBtn.click();

    return this;
  }

  public clickPickupTab() {
    this.pickupTab.click();

    return this;
  }

  public clickSelectBackUpBtn() {
    browser.wait(
      EC.presenceOf(this.selectBackUpBtn),
      constants.PRESENCE_TIMEOUT
    );
    this.selectBackUpBtn.click();
    browser.sleep(constants.WAIT);

    return this;
  }

  public clickSubmitOrderBtn() {
    this.submitOrderBtn.click();
    browser.sleep(constants.WAIT);

    return this;
  }

  public clickTermsAndConditionsCheckBox() {
    this.termsAndConditionsCheckBox.click();
    browser.sleep(constants.PAUSE);

    return this;
  }

  public getOrderConfirmationMessage() {

    return this.orderConfirmationTxt.getText();
  }

  public selectDeliveryCheckbox() {
    browser.wait(
      EC.presenceOf(this.deliveryCheckbox),
      constants.PRESENCE_TIMEOUT
    );
    this.deliveryCheckbox.click();
    browser.sleep(constants.PAUSE);

    return this;
  }

  public selectDeiveryTime() {
    browser.wait(
      EC.presenceOf(this.fulfillmentCheckbox),
      constants.PRESENCE_TIMEOUT
    );
    this.fulfillmentCheckbox.click();

    return this;
  }

  public selectPickupCheckbox() {
    browser.wait(
      EC.presenceOf(this.pickupCheckbox),
      constants.PRESENCE_TIMEOUT
    );
    this.pickupCheckbox.click();
    browser.sleep(constants.PAUSE);

    return this;
  }
}
