import { RLBase } from "./rl-base.pom";
import { MsiNextOrderWidget } from "../rp-widgets/msi-next-order-widget.pom";

export class SubscriptionPage extends RLBase {
  public msiWidget: MsiNextOrderWidget;

  constructor() {
    super();
    this.msiWidget = new MsiNextOrderWidget();
  }
}
