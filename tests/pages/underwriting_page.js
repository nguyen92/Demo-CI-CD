const {expect}  = require('@playwright/test');


exports.UnderwritingPage = class UnderwritingPage {
  constructor(page) {
      this.page = page;
      this.input_height = page.locator('input[id="height"]');
      this.input_weight = page.locator('input[id="weight"]');
      this.btn_No1 = page.locator('div[id="answer_0"] [id="No"]');
      this.btn_No2 = page.locator('div[id="answer_1"] [id="No"]');
      this.btn_No3 = page.locator('div[id="answer_2"] [id="No"]');
      this.btn_Female = page.locator('#FEMALE');
      this.btn_Start_Application = page.locator('button[type="submit"]');
  }
};