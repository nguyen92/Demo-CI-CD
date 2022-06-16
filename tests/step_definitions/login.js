const { When } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { LoginPage } = require("../pages/login_page");
const login = new LoginPage();

When("navigates to the url {string}", async (url) => {
  await page.goto(url);
  await page.waitForTimeout(1000);
});

When("user enter email {string}, {string}", async (email, pass) => {
    await page.type(login.input_Email, email);
    await page.type(login.input_Password, pass);
  }
);
When("click on the Sign button", async () => {
 await page.click(login.btn_SignIn);
});
When("user enter PIN {string}", async (pin) => {
  await  page.waitForSelector(login.input_PIN);
  await page.type(login.input_PIN, pin);
 
});

When("click on the Submit button", async () => {
  await page.click(login.btn_Submit);
  
});

When("user is navigated to the homepage", async () => {
  await page.waitForTimeout(3000);
  let currentUrl = await page.url();
 expect('https://phamiliartech.com/dashboard').toEqual(currentUrl);
  
});

When("error message is displayed", async () => {
  await page.waitForTimeout(1000);
 expect(page.locator('#signInError')).toBeVisible();
  
});
