class Product {
  constructor() {
    this.backPack_AddToCardBtn = '#add-to-cart-sauce-labs-backpack'
    this.bikeLight_AddToCardBtn = '#add-to-cart-sauce-labs-bike-light'
    this.tshirt_AddToCardBtn = "#add-to-cart-sauce-labs-bolt-t-shirt"
    this.jacket_AddToCardBtn = "#add-to-cart-sauce-labs-fleece-jacket"
    this.oneshine_AddToCardBtn = "#add-to-cart-sauce-labs-onesie"
    this.tshirtRed_AddToCardBtn = "#add-to-cart-test.allthethings()-t-shirt-(red)"
    this.priceOfBackPack = "//button[@id='add-to-cart-sauce-labs-backpack']//preceding::div[1]"
    this.priceOfBikeLight = "//button[@id='add-to-cart-sauce-labs-bike-light']//preceding::div[1]"
    this.priceOfTshirt = "//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']//preceding::div[1]"
    this.priceOfJacket = "//button[@id='add-to-cart-sauce-labs-fleece-jacket']//preceding::div[1]"
    this.priceOfOneshine = "//button[@id='add-to-cart-sauce-labs-onesie']//preceding::div[1]"
    this.priceOfTshirtRed = "//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']//preceding::div[1]"
    this.backBack_RemoveBtn = '#remove-sauce-labs-backpack'
    this.bikeLight_RemoveBtn = '#remove-sauce-labs-bike-light'
    this.tshirt_RemoveBtn = '#remove-sauce-labs-bolt-t-shirt'
    this.jacket_RemoveBtn = '#remove-sauce-labs-fleece-jacket'
    this.oneshine_RemoveBtn = '#rremove-sauce-labs-onesie'
    this.tshirtRed_RemoveBtn = '#remove-test.allthethings()-t-shirt-(red)'
    this.shoppingCartLink = 'a[class="shopping_cart_link"]'
  }

  async addToTheCart(item) {
    switch (item) {
      case 'Sauce Labs Backpack':
        await page.click(this.backPack_AddToCardBtn)
        break;
      case 'Sauce Labs Bike Light':
        await page.click(this.bikeLight_AddToCardBtn)
        break;
      case 'Sauce Labs Bolt T-Shirt':
        await page.click(this.tshirt_AddToCardBtn)
        break;
      case 'Sauce Labs Fleece Jacket':
        await page.click(this.jacket_AddToCardBtn)
        break;

      case 'Sauce Labs Onesie':
        await page.click(this.oneshine_AddToCardBtn)
        break;
      case 'Test.allTheThings() T-Shirt (Red)':
        await page.click(this.tshirtRed_AddToCardBtn)
        break;
    }
  }
    async removeFromCart(item) {
      switch (item) {
        case 'Sauce Labs Backpack':
          await page.click(this.backBack_RemoveBtn)
          break;
        case 'Sauce Labs Bike Light':
          await page.click(this.bikeLight_RemoveBtn)
          break;
        case 'Sauce Labs Bolt T-Shirt':
          await page.click(this.tshirt_RemoveBtn)
          break;
        case 'Sauce Labs Fleece Jacket':
          await page.click(this.jacket_RemoveBtn)
          break;
  
        case 'Sauce Labs Onesie':
          await page.click(this.oneshine_RemoveBtn)
          break;
        case 'Test.allTheThings() T-Shirt (Red)':
          await page.click(this.tshirtRed_RemoveBtn)
          break;
    }
  }
};
module.exports = new Product();