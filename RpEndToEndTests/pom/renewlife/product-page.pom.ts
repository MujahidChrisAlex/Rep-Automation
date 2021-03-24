import { browser, element, protractor, by } from "protractor";
import { RLBase } from "./rl-base.pom";
import { PdpWidget } from "../rp-widgets/pdp-widget.pom";
import { constants } from "../../constants";
const EC = protractor.ExpectedConditions;

export class ProductPage extends RLBase {
  private pdpRootCssSelector: string = ".pdp-initial-order";
  private pdpWidget: PdpWidget;

  private addToBagBtn = element(by.css(`#product-addtocart-button`));
  private removeBtn = element(by.css(".item-actions a"));

  constructor() {
    super();
    this.pdpWidget = new PdpWidget(this.pdpRootCssSelector);
  }

  public autoDeliveryfrequencyDDIsEnabled() {
    return this.pdpWidget.autoDeliveryfrequencyDropDownIsEnabled();
  }

  public clickAddToBag() {
    this.addToBagBtn.click();
    browser.sleep(constants.WAIT);
    return this;
  }

  public clickNextDeliveryBtn() {
    this.pdpWidget.clickNextDeliveryBtn();
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

  public freqDropDownIsEnabled() {
    return this.pdpWidget.freqDropDownIsEnabled();
  }

  public frequencyDropDownIsEnabled() {
    return this.pdpWidget.frequencyDropDownIsEnabled();
  }

  public getSubscribeOnceLabelText() {
    return this.pdpWidget.getSubscribeOnceLabelText();
  }

  public getSubscribeLabelText() {
    return this.pdpWidget.getSubscribeLabelText();
  }

  public getSuccessMessage() {
    return this.pdpWidget.getSuccessMessage();
  }

  public getSuccessMessageText() {
    return this.pdpWidget.getSuccessMessage();
  }

  public moveToAutoDeliveryFrequencyDropDown() {
    return this.pdpWidget.moveMouseToAutoDeliveryFrequencyDropDown();
  }

  public moveToFrequencyDropDown() {
    this.pdpWidget.moveMouseToFrequencyDropDown();
    return this;
  }

  public moveToSubscribeOnceRadio() {
    return this.pdpWidget.moveMouseToSubscribeOnceRadio();
  }

  public orderDropDownIsEnabled() {
    return this.pdpWidget.orderDropDownIsEnabled();
  }

  public removeProductFromBag() {
    browser.wait(EC.presenceOf(this.removeBtn), constants.PRESENCE_TIMEOUT);
    this.removeBtn.click();
    return this;
  }

  public selectFrequencyWeek() {
    this.pdpWidget.selectFrequencyWeek();
    return this;
  }

  public selectOrderAndAutoDeliveryFrequency() {
    this.pdpWidget.selectOrderAndAutoDeliveryFrequency();
    return this;
  }

  public subscribeOnceRadioIsSelected() {
    return this.pdpWidget.subscribeOnceRadioIsSelected();
  }
}
