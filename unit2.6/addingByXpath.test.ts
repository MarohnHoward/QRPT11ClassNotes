import {Builder, By, Capabilities, WebDriver} from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome())
.build();

describe('practicing Xpath selectors', () => {
    const searchBar: By = By.xpath('//input[@id="twotabsearchtextbox"]');
    const results: By = By.xpath('//div[@id="search"]');

    test("searching for an item on amazon", async () => {
        await driver.get('https://www.amazon.com')
        await driver.findElement(searchBar).sendKeys("kitchen aid stan mixer\n");
        let resultsText = await driver.findElement(results).getText();
        expect(resultsText).toContain("Kitchenaid");
        await driver.quit();
    })
})