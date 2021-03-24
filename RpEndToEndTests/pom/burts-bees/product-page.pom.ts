import { browser, element, protractor, by } from "protractor";
import { BBBase } from "./bb-base.pom";
import { PdpWidget } from "../rp-widgets/pdp-widget.pom";
import { constants } from "../../constants";
const EC = protractor.ExpectedConditions;

export class ProductPage extends BBBase {
  private pdpRootCssSelector: string = "rp-subscribe-radios";
  private pdpWidget: PdpWidget;

  private addToCartBtn = element(by.css(`.bag.add-to-cart-btn.enablebag span`));
  private bagIcon = element(by.css(".bagText"));
  private removeLink = element(
    by.cssContainingText(".mini-cart-right-content a", "Remove")
  );

  constructor() {
    super();
    this.pdpWidget = new PdpWidget(this.pdpRootCssSelector);
  }

  public clickAddToBag() {
    this.addToCartBtn.click();
    browser.sleep(constants.WAIT);
    return this;
  }

  public clickNextDeliveryBtn() {
    this.pdpWidget.clickNextDeliveryBtn();
    return this;
  }

  public clickSubscribeOnceRadio() {
    this.pdpWidget.clickSubscribeOnceRadio();
    return this;
  }

  public clickSubscribeRadio() {
    this.pdpWidget.clickSubscribeRadio();
    return this;
  }

  public clickSubscribeRadioAuto() {
    this.pdpWidget.clickSubscribeRadioAuto();
    return this;
  }

  public getSubscribeLabelText() {
    return this.pdpWidget.getSubscribeLabelText();
  }

  public getSubscribeLabelAutoText() {
    return this.pdpWidget.getSubscribeLabelAutoText();
  }

  public getSubscribeOnceLabelText() {
    return this.pdpWidget.getSubscribeOnceLabelText();
  }

  public getSuccessMessage() {
    return this.pdpWidget.getSuccessMessage();
  }

  public getSuccessMessageText() {
    return this.pdpWidget.getSuccessMessage();
  }

  public moveToFrequencyDropDown() {
    return this.pdpWidget.moveMouseToFrequencyDropDown();
  }

  public removeProductFromBag() {
    this.bagIcon.click();
    browser.sleep(constants.PAUSE);
    browser.wait(EC.presenceOf(this.removeLink), constants.PRESENCE_TIMEOUT);
    this.removeLink.click();
    return this;
  }

  public selectFrequencyDays() {
    return this.pdpWidget.selectFrequencyDays();
  }

  public selectOrderAndAutoDeliveryFrequency() {
    return this.pdpWidget.selectOrderAndAutoDeliveryFrequency();
  }
}
