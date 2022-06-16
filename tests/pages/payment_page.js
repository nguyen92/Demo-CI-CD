const {expect}  = require('@playwright/test');


exports.PaymentPage = class PaymentPage {
  constructor(page) {
      this.page = page;
      this.btn_Continue = page.locator('button[type="submit"]');
      this.btn_Credit_Card = page.locator('img[alt="Credit/debit card"]');
      this.btn_Bank_Transfer = page.locator('img[alt="Bank transfer"]');
      this.btn_Gopay = page.locator('img[alt="gopay"]');
      this.input_CardNum = page.locator('input[id="cardNum"]');
      this.input_CardHolderName = page.locator('input[id="cardHolderName"]');
      this.input_Card_ExpireDate = page.locator('input[id="expiryDate"]');
      this.input_CardCVV = page.locator('input[id="cvv"]');
      this.btn_Continue_BankTransfer = page.locator('button[id="nextBtn"]');
      this.iframe_Payment = page.locator('iframe[id="payment_iframe"]');
      this.btn_Paynow = page.locator('button[id="nextBtn"]');
      this.input_Otp = page.locator('input[id="PaRes"]');
      this.btn_continue_gopay =page.locator('.button-main-content');
      this.btn_Ok_CreditCard = page.locator('button[class="btn btn-sm btn-success"]');
      this.iframe_otp_CreditCard = page.locator('div[data-3d-secure-view] iframe');
      this.iframe_gopay = page.locator('#snap-midtrans');
      this.img_QR = page.locator('img[class="qr"]');
      this.input_QRCode = page.locator('#qrCodeUrl');
      this.btn_ScanQR = page.locator('button[type="submit"]');
      this.btn_SkipOffers = page.locator('button[class="btn--cancel"]');
      this.btn_Next = page.locator('button[type="submit"] div div');
        this.btn_Ok = page.locator('div.MuiDialogActions-root.MuiDialogActions-spacing button');
  }
};