const pupeteer = require("puppeteer");

// const screenShot = async (url) => {
//   const browser = await pupeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(url, { waitUntil: "domcontentloaded" });
//   await page.screenshot({ path: "example.png" });
//   await browser.close();
// };

// screenShot("https://www.amazon.com/");

// const pricecheck = async (url) => {
//   const browser = await pupeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.goto(url, { waitUntil: "domcontentloaded" });
//   //with .evaluate you get access to the page's dom, lots you can do with this
//   //can also use page.type for this
//   await page.evaluate(() => {
//     document.querySelector("#twotabsearchtextbox").value = "macbook";
//   });
//   await page.click("#nav-search-submit-button");
//   await page.waitForNavigation({ waitUntil: "domcontentloaded" });
//   await page.screenshot({ path: "searching.png", fullPage: true });
//   await browser.close();
// };
// pricecheck("https://www.amazon.com/");

const priceChecker = async (url) => {
  const browser = await pupeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });
  //this allows you to pass in a selector and get that element
  const price = await page.$eval("#pricing", (element) => element.innerText);
  await browser.close();
  return price;
};

const itemURL =
  "https://www.microcenter.com/product/631521/apple-macbook-pro-mydc2ll-a-late-m1-2020-133-laptop-computer-silver";
priceChecker(itemURL).then(console.log);
