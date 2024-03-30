require("dotenv").config();
const puppeteer = require("puppeteer");

const URL = "https://instagram.com";

const scrappingInstagram = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(URL, { waitUntil: "networkidle2" });

  //! accept cookies //
  await page.click("._a9--");

  await page.type('[name="username"]', process.env.INSTA_MAIL, {
    delay: 50,
  });
  await page.type('[name="password"]', process.env.INSTA_MDP, {
    delay: 50,
  });

  await page.click('button[type="submit"]');

  await page.waitForSelector("._ac8f > div", { visible: true });
  await page.click("._ac8f > div");

  await page.waitForSelector("._a9-z button._a9_1", {
    visible: true,
  });
  await page.click("._a9-z button._a9_1");

  debugger;

  await browser.close();
};

try {
  scrappingInstagram();
} catch (error) {
  console.log(error);
}
