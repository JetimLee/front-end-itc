import { chromium } from "playwright";
//playwright apis are async, which means that they return promises and we need to use await/async pattern
(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("http://google.com");
  const email = await page.$("#APjFqb");
  await email.type("Hello from Playwright", { delay: 50 });
  await browser.close();
})();
