const {expect}  = require('@playwright/test');


exports.ConfirmationPage = class ConfirmationPage {
  constructor(page) {
      this.page = page;
      this.btn_Continue = page.locator('button[type="submit"]');
      this.btn_Agree = page.locator('div[class="MuiDialogActions-root MuiDialogActions-spacing"] div div');
  }
};