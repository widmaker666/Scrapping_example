const puppeteer = require("puppeteer");
const nodemailer = require("nodemailer");
require("dotenv").config();

const PRICE_MAX = 45
const url =
  "https://www.amazon.fr/Future-press-Guide-Officiel-Savoir/dp/3869931167/ref=sr_1_2?dib=eyJ2IjoiMSJ9.WfyKrjiQ3YlQ9uBdLHlotjwWsCe-yuUkK45lW3hsicdMfRDQMD9CAm8vtznRXT8mEvw-2os6uxjwRJQ1y62hP90iFtD_PDUyGjxWTZ4g7OkptHTQ4eiKrfGQqNrI1Ypy7-hTAtpXRXDwDtEF1cVpkfqWNvV6TwNuo9K8SDtdslPJkIssUHMzvn9HHpDVLuvqna5jnSA9EAqmdZ9-sAz3qZMQIF5rINoZlkosyB-4m5gD8CMZORHhbv00ipL-4sFdQe5CT2b7Uajwk2mvYUQsSBKRD2Cuh1uIfN5V7S4UmAc.OVv_gmaw4MiEZpa2_w8C6ORbqgb9a3mhu_9THD0a7F8&dib_tag=se&keywords=elden+ring&qid=1711784059&sr=8-2";
  
const gotoUrlCdiscount = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });

  await page.setViewport({
    width: 1200,
    height: 1000,
  });

  //! Créer un pdf //
  /*  await page.pdf({
    path: "page.pdf",
    format: "A4",
  }) */

  //! Image //
  /* await page.screenshot({
    path: "image.png",
  }); */

  //! Get html <body> //
  //const bodyHtml = await page.evaluate(() => document.body.innerHTML);

  //! Recuperer le prix //
  const data = await page.evaluate(() => {
    return document.querySelector("span[class=a-offscreen]").innerText;
  });
  console.log(`le prix est : ${data}`);

  let newData = await data.substring(0, 4);

  if (parseInt(newData) < PRICE_MAX) {
    sendNotification(newData);
  }

  //! Send mail function (ne marche pas car il faut autoriser gmail et nodemailer) //
  async function sendNotification(price) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter
      .sendMail({
        from: "quelqu'un",
        to: "alexandre.hontcharouk69@gmail.com",
        subject: `Prix sous les ${PRICE_MAX} €`,
        html: `Le prix du jeu est de ${price}€`,
      })
      .then(() => console.log("message send"));
  }

  await browser.close();
};

gotoUrlCdiscount();
