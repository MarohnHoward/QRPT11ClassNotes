import {Builder, Capabilities, WebDriver} from "selenium-webdriver"; 
const chromedriver = require("chromedriver"); 
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build(); 
import {eManager} from './reviewPOM';
const ep = new eManager(driver); 

class Inturns {
    name: string; 
    phone: number; 
    title: string; 

    constructor(name:string, phone:number,title:string) {
        this.name= name; 
        this.phone = phone; 
        this.title = title; 
    }
}

let newInturns: Array<Inturns> = [
    new Inturns("Tina", 1234567890, "Boy Watch"),
    new Inturns("Gene", 1234567890, "Entertainment" ), 
    new Inturns("Louise", 1234567890, "Prank Duty"),
    new Inturns("Linda", 1234567890, "Taking Orders")
];

let addInturn = async (newInturns) => {
    await ep.click(ep.addEmployee);
    await ep.click(ep.newEmployee);
    await ep.click(ep.nameInput);
    await ep.setInput(ep.nameInput, newInturns.name);
    await ep.click(ep.phoneInput);
    await ep.setInput(ep.phoneInput, newInturns.phone);
    await ep.click(ep.titleInput);
    await ep.setInput(ep.titleInput, newInturns.title); 
    await ep.click(ep.saveBtn);
    await ep.driver.sleep(3000)
}

test("can it add employees using a loop", async () => {
    await ep.navigate();
    for(let i = 0; i < newInturns.length; i++){
        await addInturn(newInturns[i]);
    }
    await ep.driver.quit()
})