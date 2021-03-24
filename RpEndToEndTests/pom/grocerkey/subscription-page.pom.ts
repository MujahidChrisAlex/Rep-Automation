import { GKBase } from "./gk-base.pom";
import { MsiNextOrderWidget } from "../rp-widgets/v2/msi-next-order-widget.pom";

export class SubscriptionPage extends GKBase {
  public msiWidget: MsiNextOrderWidget;

  constructor() {
    super();
    this.msiWidget = new MsiNextOrderWidget();
  }
}
