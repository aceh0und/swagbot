const {Builder, By, Key, util} = require("selenium-webdriver");


async function main() {
    let driver = await new Builder().forBrowser("firefox").build();

    await driver.get("https://www.swagbucks.com/shop/allcoupons/grocery");
    
    /* CANNOT FIND ELEMENT BECAUSE NOT LOGGED IN, BUT CANNOT LOGIN AUTOMATICALLY BECAUSE OF CAPTCHA. I'm stuck :( */
    driver.findElement(By.className("coupon")).click();

}
main()