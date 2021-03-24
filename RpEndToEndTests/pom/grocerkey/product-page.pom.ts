import { GKBase } from "./gk-base.pom";
import { PdpWidget } from "../rp-widgets/v2/pdp-widget.pom";

export class ProductPage extends GKBase {
  private pdpWidget: PdpWidget;

  constructor() {
    super();
    this.pdpWidget = new PdpWidget();
  }

  public clickAddToCartBtn() {
    this.pdpWidget.clickAddToCartBtn();
    return this;
  }

  public clickManageBtn() {
    this.pdpWidget.clickManageBtn();
    return this;
  }

  public clickReplenishCheckbox() {
    this.pdpWidget.clickReplenishCheckbox();
    return this;
  }

  public getSubscriptionText() {
    return this.pdpWidget.getSubscriptionText();
  }

  public IncreaseQty() {
    this.pdpWidget.IncreaseQty();
    return this;
  }

  public moveMouseToSideCart() {
    this.pdpWidget.moveMouseToSideCart();
    return this;
  }

  public removeProductFromCart() {
    this.pdpWidget.removeProductFromCart();
    return this;
  }

  public repleniumWidgetIsPresent() {
    return this.pdpWidget.repleniumWidgetIsPresent();
  }

  public selectReplenishWeek() {
    this.pdpWidget.selectReplenishWeek();
    return this;
  }

  public subDateIsDisplayed() {
    return this.pdpWidget.subDateIsDisplayed();
  }
}
