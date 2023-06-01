import {Google} from './googlePageWBase';
const google = new Google();

test('do a search', async () => {
    await google.navigate();
    await google.search('Chicago Cubs');
    let text = await google.getResults();
    expect(text).toContain('Chicago Cubs');
    await google.driver.quit()
});