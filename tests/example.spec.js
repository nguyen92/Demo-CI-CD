// @ts-check
const { test } = require('@playwright/test');
const { chromium } = require('@playwright/test');

test.describe('New Todo', () => {
  test('should allow me to add todo items', async () => {
    // Create 1st todo.
    const browser =  await chromium.launch();
    const context = await browser.newContext();
    const pageOne = await context.newPage();
    const pageTwo = await context.newPage();
    await pageOne.goto('https://demo.playwright.dev/todomvc');
    await pageOne.locator('.new-todo').fill('abc');
    await pageOne.locator('.new-todo').press('Enter');
    await pageTwo.goto('https://app.contentstack.com')
    await pageTwo.locator("//input[@title='Tìm kiếm']").fill('hello')
    await pageTwo.close();
    await pageOne.locator('.new-todo').fill('john');
    await pageOne.locator('.new-todo').press('Enter');
    await pageOne.locator('.new-todo').fill('na');
    await pageOne.locator('.new-todo').press('Enter');

  });
  
});
