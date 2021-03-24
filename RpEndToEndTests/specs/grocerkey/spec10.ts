import {} from "jasmine";
import { LoginPage } from "../../pom/grocerkey/login-page.pom";
import { SubscriptionPage } from "../../pom/grocerkey/subscription-page.pom";
import { browser } from "protractor";

const data = browser.params.gkData;
const page = new LoginPage();
const subPage = new SubscriptionPage();
const expectedRemoveFromOrderMsgText =
  "This item will be moved to your";
const expectedRemoveFromOrderConfrimationText = "Saving your changes";

describe("[Grocer Key] Go to grocer key's homepage, Login and goto MSI page and verify REMOVE FROM ORDER functionality working fine", function () {
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

  it("should open Next Order Tab on MSI page", async () => {
    msi.gotoNextOrderTab();
  });

  it("should click Remove From Order Btn", async () => {
    msi.clickRemoveFromOrderBtn();
  });

  it("should display Remove From Order Confirmation text", async () => {
    expect(await msi.getRemoveFromOrderConfirmationTxt()).toContain(
      expectedRemoveFromOrderMsgText
    );
  });

  it("should click CANCEL Remove From Order Btn", async () => {
    msi.clickCancelRemoveFromOrderBtn();
  });

  it("should click Remove From Order Btn again", async () => {
    msi.clickRemoveFromOrderBtn();
  });

  it("should click CONFIRM Remove From Order Btn", async () => {
    msi.clickConfirmRemoveFromOrderBtn();
  });

  it("should display Remove From Order Confirmation text again", async () => {
    expect(await msi.getRemoveFromOrderConfirmationTxt()).toContain(
      expectedRemoveFromOrderConfrimationText
    );
  });
});
