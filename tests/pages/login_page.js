const {expect}  = require('@playwright/test');


exports.LoginPage = class LoginPage {
  constructor() {
      this.input_Email = 'input[id="EmailInputEmail"]'
      this.input_Password ='input[id="PasswordInputPassword"]'
      this.input_PIN = 'input[id="Pin"]'
      this.btn_SignIn = 'button[id="SignInButton"]'
      this.btn_Submit = 'button[id="RequestPinForm_SubmitButton"]'
  }
};