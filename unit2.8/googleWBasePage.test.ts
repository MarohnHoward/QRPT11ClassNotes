import {Google} from './googlePageWBase';
const google = new Google();
const fs = require('fs')
test('do a search', async () => {
    await google.navigate();
    await google.search("Philidelphia Philly's");
    let text = await google.getResults();
    expect(text).toContain("Philidelphia Philly's");

    fs.writeFile(`${__dirname}/test.txt`, text, (e) => {
        if (e) console.log(e);
        else console.log('Save Succesful');
    } )

    fs.writeFile(`${__dirname}/google.png`, 
    await google.driver.takeScreenshot(), "base64", 
    (e) =>{
        if (e) console.log(e);
        else console.log("a pictures says a thousand words.")
    })

    await google.driver.quit()
});