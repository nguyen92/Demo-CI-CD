const report = require('multiple-cucumber-html-reporter');
report.generate({
jsonDir: "reports/",  // ** Path of .json file **//
reportPath: "./reports/cucumber-report.html",
metadata: {
browser: {
name: "chrome",
},
device: "PC",
platform: {
name: "window",
version: "11",
},
},
displayDuration: true,
durationInMS: true,
displayReportTime: true
});

