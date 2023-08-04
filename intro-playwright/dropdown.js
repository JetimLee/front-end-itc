import { chromium } from "playwright";
//playwright apis are async, which means that they return promises and we need to use await/async pattern
(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 30 });
  const page = await browser.newPage();
  await page.goto("https://the-internet.herokuapp.com/dropdown");
  const dropdown = await page.$("#dropdown");

  //by value
  await dropdown.selectOption("1");
  //by index

  //by label
  await browser.close();
})();
