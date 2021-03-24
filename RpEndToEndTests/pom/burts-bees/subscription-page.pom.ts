import { BBBase } from "./bb-base.pom";
import { MsiNextOrderWidget } from "../rp-widgets/msi-next-order-widget.pom";

export class SubscriptionPage extends BBBase {
  public msiWidget: MsiNextOrderWidget;

  constructor() {
    super();
    this.msiWidget = new MsiNextOrderWidget();
  }
}
