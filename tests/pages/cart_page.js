
 class Cart {
  constructor() {
  this.checkoutBtn = '#checkout'
  this.continueShoppingBtn = '#continue-shopping'
  this.firstnameInput = "#first-name"
  this.lasstnameInput = '#last-name'
  this.zipCodeInput = '#postal-code'
  this.continueBtn = '#continue'
  this.cancelbtn = '#cancel'
  this.finishBtn = '#finish'
  this.backToHomeBtn = '#back-to-products'
  }

  async login(username, password) {
    await page.type(this.userNameInput, username)
    await page.type(this.passwordInput, password)
    await page.click(this.loginBtn)
  }
};

module.exports = new Cart();