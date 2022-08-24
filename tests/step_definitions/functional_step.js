const { When } = require("@cucumber/cucumber");
const {expect} = require("@playwright/test");
const product = require("../pages/product_page");
const cart = require("../pages/cart_page");
const login = require("../pages/login_page");

When("login to the system with username {string} and password {string}", async function (username, password) {
    await login.signIn(username, password)
  });
 
When("I add {string} to cart", async function (item) {
    await product.addToTheCart(item)
  });

  When('verify the number of badge is {string}', async (num) => {
      const badgeNum = await page.locator('span[class="shopping_cart_badge"]')
      await expect(badgeNum).toHaveText(num)
      await page.waitForTimeout(1500)
  });

  When('I go to shopping cart', async () => {
    await page.click(product.shoppingCartLink)

});

When('verify {string} and {string} are displayed', async (item1, item2) => {
    const firstItem = await page.locator("//div[text()='"+item1+"']")
    const secondItem = await page.locator("//div[text()='"+item2+"']")
    await expect(firstItem).toBeVisible()
    await expect(secondItem).toBeVisible()
});

When('click on the Checkout button', async () => {
    await page.click(cart.checkoutBtn)
});
When('I enter first name {string}, last name {string} and postal code {string}', async (firstname, lastname, code) => {
    await page.type(cart.firstnameInput, firstname)
    await page.type(cart.lasstnameInput, lastname)
    await page.type(cart.zipCodeInput, code)
});

When('click on the Continue button', async () => {
    await  page.waitForSelector(cart.continueBtn);
    await page.click(cart.continueBtn)
});
When('click on Finish button', async () => {
    await  page.waitForSelector(cart.finishBtn);
    await page.click(cart.finishBtn)
});

When('message {string} displays', async (message) => {
    await page.waitForSelector('h2')
    const mess = await page.locator('h2')
    await expect(mess).toHaveText(message)
    await page.waitForTimeout(2000);
});

When("I remove {string} from cart", async function (item) {
    await product.removeFromCart(item)
  });