import { browser, element, protractor, by } from "protractor";
import { constants } from "../../constants";
const EC = protractor.ExpectedConditions;

export class PdpWidget {
  private autoDeliveryFreqDropDown = element(
    by.css(`${this.root} .frequency select`)
  );
  private frequencyDropDown = element(
    by.css(`${this.root} .pdp-frequency select`)
  );
  private freqDropDown = element(by.css(`${this.root} .frequency select`));
  private freqOption = element(
    by.css(`${this.root} .frequency option:last-child`)
  );
  private frequencyWeek = element(
    by.css(`${this.root} .pdp-frequency select option:last-child`)
  );
  private nextDeliveryBtn = element(by.css(`${this.root} #rp-button`));
  private orderDropDown = element(by.css(`${this.root} .choose-order select`));
  private orderOption = element(
    by.css(`${this.root} .choose-order option:last-child`)
  );
  private subscribeOnceRadio = element(
    by.css(`${this.root} input[id^='subscribe-radio-once-']`)
  );
  private subscribeOnceLbl = element(
    by.css(`${this.root} #rp-pdp > div > div:nth-child(1) label`)
  );
  private subscribeRadio = element(
    by.css(`${this.root} input[id^='subscribe-radio-every']`)
  );
  private subscribeRadioAuto = element(
    by.css(`${this.root} input[id^='subscribe-radio-auto']`)
  );
  private subscribeLbl = element(
    by.css(`${this.root} label.rp-label.replenish`)
  );
  private subscribeLblAuto = element(
    by.css(
      `${this.root} div#rp-pdp.pdp-initial-order div div div label.rp-label`
    )
  );
  private successMsg = element(
    by.css(`${this.root} rp-sub-eligible-confirmation p`)
  );

  constructor(private root: string) {}

  public autoDeliveryfrequencyDropDownIsEnabled() {
    browser.wait(
      EC.presenceOf(this.autoDeliveryFreqDropDown),
      constants.PRESENCE_TIMEOUT
    );
    browser.actions().mouseMove(this.autoDeliveryFreqDropDown).perform();

    return this.autoDeliveryFreqDropDown.isEnabled();
  }

  public clickNextDeliveryBtn() {
    browser.wait(
      EC.presenceOf(this.nextDeliveryBtn),
      constants.PRESENCE_TIMEOUT
    );
    this.nextDeliveryBtn.click();

    return this;
  }

  public clickSubscribeOnceRadio() {
    browser.wait(
      EC.presenceOf(this.subscribeOnceRadio),
      constants.PRESENCE_TIMEOUT
    );
    this.subscribeOnceRadio.click();

    return this;
  }

  public clickSubscribeRadio() {
    browser.wait(
      EC.presenceOf(this.subscribeRadio),
      constants.PRESENCE_TIMEOUT
    );
    this.subscribeRadio.click();

    return this;
  }

  public clickSubscribeRadioAuto() {
    browser.wait(
      EC.presenceOf(this.subscribeRadioAuto),
      constants.PRESENCE_TIMEOUT
    );
    this.subscribeRadioAuto.click();

    return this;
  }

  public frequencyDropDownIsEnabled() {
    browser.wait(
      EC.presenceOf(this.frequencyDropDown),
      constants.PRESENCE_TIMEOUT
    );
    browser.actions().mouseMove(this.frequencyDropDown).perform();

    return this.frequencyDropDown.isEnabled();
  }

  public freqDropDownIsEnabled() {
    return this.freqDropDown.isEnabled();
  }

  public getSubscribeLabelText() {
    browser.wait(EC.presenceOf(this.subscribeLbl), constants.PRESENCE_TIMEOUT);

    return this.subscribeLbl.getText();
  }

  public getSubscribeLabelAutoText() {
    browser.wait(
      EC.presenceOf(this.subscribeLblAuto),
      constants.PRESENCE_TIMEOUT
    );

    return this.subscribeLblAuto.getText();
  }

  public getSubscribeOnceLabelText() {
    browser.waitForAngularEnabled(false);
    browser.sleep(constants.WAIT);
    return this.subscribeOnceLbl.getText();
  }

  public getSuccessMessage() {
    if (this.nextDeliveryBtn.click()) {
      browser.sleep(constants.WAIT);
      browser.wait(EC.presenceOf(this.successMsg), constants.PRESENCE_TIMEOUT);
    }

    return this.successMsg.getText();
  }

  public moveMouseToAutoDeliveryFrequencyDropDown() {
    browser.wait(
      EC.presenceOf(this.autoDeliveryFreqDropDown),
      constants.PRESENCE_TIMEOUT
    );
    this.autoDeliveryFreqDropDown.click();

    return this;
  }

  public moveMouseToFrequencyDropDown() {
    browser.wait(
      EC.presenceOf(this.frequencyDropDown),
      constants.PRESENCE_TIMEOUT
    );
    browser.actions().mouseMove(this.frequencyDropDown).perform();

    return this;
  }

  public moveMouseToSubscribeOnceRadio() {
    browser.wait(
      EC.presenceOf(this.subscribeOnceRadio),
      constants.PRESENCE_TIMEOUT
    );
    browser.actions().mouseMove(this.subscribeOnceRadio).perform();

    return this;
  }

  public orderDropDownIsEnabled() {
    return this.orderDropDown.isEnabled();
  }

  public selectFrequencyDays() {
    this.frequencyDropDown.click();
    browser.actions().mouseMove(this.frequencyDropDown).perform();
    this.frequencyWeek.click();
    this.frequencyDropDown.click();

    return this;
  }

  public selectFrequencyWeek() {
    browser.wait(
      EC.presenceOf(this.frequencyDropDown),
      constants.PRESENCE_TIMEOUT
    );
    this.frequencyDropDown.click();
    browser.wait(EC.presenceOf(this.frequencyWeek), constants.PRESENCE_TIMEOUT);
    browser.actions().mouseMove(this.frequencyDropDown).perform();
    this.frequencyWeek.click();
    this.frequencyDropDown.click();

    return this;
  }

  public selectOrderAndAutoDeliveryFrequency() {
    browser.wait(EC.presenceOf(this.orderDropDown), constants.PRESENCE_TIMEOUT);
    browser.actions().mouseMove(this.orderDropDown).perform();
    this.orderOption.click();
    this.orderDropDown.click();
    browser.sleep(constants.PAUSE);
    browser.actions().mouseMove(this.freqDropDown).perform();
    this.freqOption.click();
    this.freqDropDown.click();
    browser.sleep(constants.PAUSE);

    return this;
  }

  public subscribeOnceRadioIsSelected() {
    return this.subscribeOnceRadio.isSelected();
  }
}
