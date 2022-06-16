const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");
// you can choose other browsers like webkit or firefox according to your requirement
const { chromium } = require("playwright");

// in milliseconds
setDefaultTimeout(60000)
BeforeAll(async function () {
    global.browser = await chromium.launch({
        headless: false,
        channel: "chrome"
    });
 
 });
 
 // close the browser
 AfterAll(async function () {
 
    await global.browser.close();
 });
 
 // Create a new browser context and page per scenario
 Before(async function () {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
    
 });
 
 // Cleanup after each scenario
 After(async function () {
    await global.page.close();
    await global.context.close();
 });