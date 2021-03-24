import {} from "jasmine";
import { LoginPage } from "../../pom/grocerkey/login-page.pom";
import { SubscriptionPage } from "../../pom/grocerkey/subscription-page.pom";
import { browser } from "protractor";

const data = browser.params.gkData;
const page = new LoginPage();
const subPage = new SubscriptionPage();
const expectedSendMeSuccessText = "Saving";
const expectedEveryWeekSuccessText = "Saving the change";

describe("[Grocer Key] Go to grocer key's homepage, Login and goto MSI page and verify LIST ITEM tab elements, Send Me and Every Week drop downs", function () {
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

  it("should allow to change Send Me drop down value and display correct success message", async () => {
    msi.clickSendMeDropdown();
    expect(await msi.getSendMeSuccessMsg()).toContain(
      expectedSendMeSuccessText
    );
  });

  it("should allow to change Every Month drop down value and display correct success message", async () => {
    msi.clickMonthsDropdown();
    expect(await msi.getSendMeSuccessMsg()).toContain(
      expectedEveryWeekSuccessText
    );
  });
});
