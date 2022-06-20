// const report = require('multiple-cucumber-html-reporter');
// report.generate({
// jsonDir: "reports/",  // ** Path of .json file **//
// reportPath: "./reports/cucumber-report.html",
// metadata: {
// browser: {
// name: "chrome",
// },
// device: "Dell",
// platform: {
// name: "window",
// version: "11",
// },
// },
// displayDuration: true,
// durationInMS: true,
// displayReportTime: true
// });

const reporter = require('cucumber-html-reporter')

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/report.json',
  output: 'reports/cucumber_report.html',
  reportSuiteAsScenario: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    'App Version': '2.0.0',
    'Test Environment': 'STAGING',
    Browser: 'Chrome 54.0',
    Platform: 'Windows 10',
  },
}

reporter.generate(options)