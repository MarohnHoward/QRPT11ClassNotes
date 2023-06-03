import {By, until, WebDriver, WebElement} from 'selenium-webdriver'

const chromedriver = require("chromedriver");

export class eManager {
    driver: WebDriver; 
    url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html"
    headerTxt: By = By.css('.titleText');
    addEmployee: By = By.xpath('//li[@name="addEmployee"]');
    newEmployee: By = By.xpath('//li[text()="New Employee"]'); 
    nameInput: By = By.css('[name="nameEntry"]');
    phoneInput: By = By.name('phoneEntry');
    titleInput: By = By.xpath('(//input[@class="materialInput"])[3]');
    saveBtn: By = By.css('#saveBtn');
    constructor(driver: WebDriver) {
        this.driver = driver;
    };
    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy)); 
        let element = await this.driver.findElement(elementBy);
        await this.driver.wait(until.elementIsVisible(element));
        return element;
    };
    async navigate() {
        await this.driver.get(this.url);
        await this.getElement(this.headerTxt);
    };
    async click(elementBy: By): Promise<void>{
        await this.getElement(elementBy); 
        return (await this.getElement(elementBy)).click();
    };
    async sendKeys(elementBy: By, keys): Promise<void> {
        await this.getElement(elementBy);
        return (await this.getElement(elementBy)).sendKeys(keys);
    };
    async setInput(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy);
        await input.clear(); 
        return input.sendKeys(keys)
    }
}