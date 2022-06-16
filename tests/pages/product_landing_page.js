const {expect}  = require('@playwright/test');



exports.ProductLandingPage = class ProductLandingPage {
  constructor() {
      this.btn_mySelf = '#MYSELF';
      this.btn_myChild = '#MY_CHILD';
      this.btn_myParents = '#MY_PARENT';
      this.btn_mySpouse = '#MY_SPOUSE';
      this.btn_Male = '#MALE';
      this.btn_Female = '#FEMALE';
      this.dropdown_Age = '#mui-component-select-age';
      this.btn_X = 'div.MuiInputAdornment-root.MuiInputAdornment-positionEnd  div  svg path';
      this.txt_PlanA = 'div.QuoteWidgetstyled__RightPanel-sc-axe508-2.hXmFDX.col-lg-6.col-md-12 > div:nth-child(6) > div';
      this.txt_PlanB = 'div.QuoteWidgetstyled__RightPanel-sc-axe508-2.hXmFDX.col-lg-6.col-md-12 > div:nth-child(5) > div';
      this.txt_PlanC = 'div.QuoteWidgetstyled__RightPanel-sc-axe508-2.hXmFDX.col-lg-6.col-md-12 > div:nth-child(4) > div';
      this.txt_PlanD = 'div.QuoteWidgetstyled__RightPanel-sc-axe508-2.hXmFDX.col-lg-6.col-md-12 > div:nth-child(3) > div';
      this.btn_Apply_Online = "button[type='submit']";
      this.btn_Payment_Mode = "div.sc-kmQMED.bWmjJb > div";
  }

 
};
