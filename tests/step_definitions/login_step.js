const { When } = require("@cucumber/cucumber");
const {expect} = require("@playwright/test");
const login = require('../pages/login_page');
When("navigates to the url {string}", async (url)=> {
  await page.goto(url);
 });
 
 When("I enter username {string}", async function (username) {
     await page.type(login.userNameInput, username);
   });
 
   When("enter password {string}", async function (pass) {
     await page.type(login.passwordInput, pass);
   });
 
   When("I click on the Login button", async function () {
     await page.click(login.loginBtn);
   });
When("I can access the system", async function () {
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
  });
  When("the error message {string} displays", async function (errMessage) {
    await page.waitForSelector('h3');
    const err = await page.locator('h3')
    await expect(err).toHaveText(errMessage)
  });

