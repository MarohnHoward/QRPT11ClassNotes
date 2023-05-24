import {Builder, By, Capabilities, WebDriver} from 'selenium-webdriver';

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome())
.build();

describe("practing CSS locators", () => {
   /* beforeEach(async () => {
        await driver.get("https://www.amazon.com");
    });
    afterAll(async () => {
        await driver.quit();
    }); */
    //where we put the locators we want to interact with
    const searchBar: By = By.css('#twotabsearchtextbox');
    const results: By = By.css('#search');

    test("searching for an item", async () => {
        await driver.get("https://www.amazon.com");
        await driver.findElement(searchBar).sendKeys("baby yoda\n");
        let resultsText = await driver.findElement(results).getText();
        expect(resultsText).toContain("Baby Yoda");
        await driver.quit();
    });
});
