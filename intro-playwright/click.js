import { chromium } from "playwright";
//playwright apis are async, which means that they return promises and we need to use await/async pattern
(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 300 });
  const page = await browser.newPage();
  await page.goto("https://www.apronus.com/music/lessons/unit01.htm");
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(1) > button");
  await page.click("#t2 > table > tr:nth-child(6) > td:nth-child(8) > button");
  await page.click("#t2 > table > tr:nth-child(6) > td:nth-child(5) > button");
  await browser.close();
})();
