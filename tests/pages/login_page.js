
 class Login {
   constructor() {
   this.userNameInput = '#user-name'
   this.passwordInput = '#password'
   this.loginBtn = "#login-button"
   }

   async signIn(username, password) {
     await page.type(this.userNameInput, username)
     await page.type(this.passwordInput, password)
     await page.click(this.loginBtn)
   }
};

module.exports = new Login()