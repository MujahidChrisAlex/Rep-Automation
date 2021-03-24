import {} from "jasmine";
import { browser } from "protractor";
import { ProductPage } from "../../pom/burts-bees/product-page.pom";

const data = browser.params.bbData;
const page = new ProductPage();
const expectedSubscribeOnceText = "Deliver 1 time only";
const expectedSubscribText =
  "Get free shipping on auto-delivery orders over $10";

describe("[BurtsBees] - Add product to Bag as an unauthenticated user", function () {
  page.open(data.productPageUrl).clickOneTrustAccept();

  it("should have unauthenticated subscribe once label", async () => {
    expect(await page.getSubscribeOnceLabelText()).toBe(
      expectedSubscribeOnceText
    );
  });

  it("should have unauthenticated subscribe label", async () => {
    page.clickSubscribeRadio();
    expect(await page.getSubscribeLabelText()).toBe(expectedSubscribText);
  });

  it("should click frequency drop down and select frequency day", async () => {
    page.selectFrequencyDays();
  });

  it("should click Add to Bag button", async () => {
    page.clickAddToBag();
  });
});
