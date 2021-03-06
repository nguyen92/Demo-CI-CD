const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");
// you can choose other browsers like webkit or firefox according to your requirement
const playwright  = require("playwright");

// in milliseconds
setDefaultTimeout(60000)
BeforeAll(async function () {
    global.browser = await playwright['chromium'].launch({
    });
 
 });
 
 // close the browser
 AfterAll(async function () {
 
    await global.browser.close();
 });
 
 // Create a new browser context and page per scenario
 Before(async function () {
    global.context = await global.browser.newContext({
      recordVideo: {
         dir: 'videos/',
         size: { width: 1920, height: 1080}
      },
      viewport: {
         width: 1920,
         height: 1080,
       },
    });
    global.page = await global.context.newPage();
    
 });
 
 // Cleanup after each scenario
 After(async function () {
    await global.page.close();
    await global.context.close();
 });

 After(async function (scenario) {
   const scenarioStatus= scenario.result.status
   //console.log(`:cucumber: Failed scenario, Taking screenshot.... "${scenario.pickle.name}"`);
   if(scenarioStatus==='FAILED') {
     var buffer = await global.page.screenshot({ path: `./reports/screenshots/${scenario.pickle.name}.png`, fullPage: true })
     this.attach(buffer, 'image/png');
   }
 });
 