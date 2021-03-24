import {} from "jasmine";
import { LoginPage } from "../../pom/grocerkey/login-page.pom";
import { SubscriptionPage } from "../../pom/grocerkey/subscription-page.pom";
import { browser } from "protractor";

const data = browser.params.gkData;
const page = new LoginPage();
const subPage = new SubscriptionPage();
const expectedSnoozeMsgText = "This item will be moved to your";
const expectedSnoozeConfrimationText = "Saving your changes";

describe("[Grocer Key] Go to grocer key's homepage, Login and goto MSI page and verify SNOOZE ORDER functionality working fine", function () {
  var msi: any = subPage.msiWidget;
  page.open(data.homePageUrl);

  it("should click on Choose Btn", async () => {
    page.clickChooseBtn();
  });

  it("should select Store", async () => {
    page.clickChooseStoreBtn();
    page.open(data.storeLocationUrl);
  });

  it("should click Start Shopping", async () => {
    page.clickStartShopping();
  });

  it("should click Login Btn", async () => {
    page.clickLogInBtn();
  });

  it("should enter valid credentials and successfully login", async () => {
    page.loginUser(data.email, data.password);
  });

  it("should goto My Subscription page", async () => {
    page.open(data.mySubscriptionsUrl);
  });

  it("should open MANAGE List Item Tab screen", async () => {
    msi = msi.gotoListTab();
    msi.clickSnoozeBtn();
  });

  it("should display Snooze Order Confirmation text", async () => {
    expect(await msi.getSnoozeOrderConfirmationTxt()).toContain(
      expectedSnoozeMsgText
    );
  });

  it("should click CANCEL Snooze Btn", async () => {
    msi.clickCancelSnoozeBtn();
  });

  it("should click Snooze Btn again", async () => {
    msi.clickSnoozeBtn();
  });

  it("should click CONFIRM Snooze Btn", async () => {
    msi.clickConfirmSnoozeBtn();
  });

  it("should display Snooze Confirmation text again", async () => {
    expect(await msi.getSnoozeOrderConfirmationTxt()).toContain(
      expectedSnoozeConfrimationText
    );
  });
});
