const playwright = require('playwright');
const cheerio = require('cheerio')

async function test(){
 const browser = await playwright.chromium.launch({headless: false, actionTimeout: 30000, });

 const page = await browser.newPage();
 await page.goto('https://www.bing.com');
 await page.waitForLoadState();

 await sleep(2000); // seems to need a bit of pause

 await page.getByRole('textbox', { id: 'sb_form_q' }).fill('how does playwright work?');
 await page.getByRole('textbox', { id: 'sb_form_q' }).press('Enter');

 await sleep(5000);


 await browser.close();
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

test();