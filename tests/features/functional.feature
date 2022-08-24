@test1
Feature: functional

  Background: User is logged in
    Given navigates to the url 'https://www.saucedemo.com/'
    And login to the system with username 'standard_user' and password 'secret_sauce'
  
  Scenario Outline: As a standard user I can buy product
    When I add '<item1>' to cart
    And I add '<item2>' to cart
    And verify the number of badge is '2'
    And I go to shopping cart
    And verify '<item1>' and '<item2>' are displayed
    And click on the Checkout button
    And I enter first name 'John', last name 'Nguyen' and postal code '550000'
    And click on the Continue button
    And click on Finish button
    Then message 'THANK YOU FOR YOUR ORDER' displays

    Examples:
      | item1                   | item2                    |
      | Sauce Labs Backpack     | Sauce Labs Bike Light    |
      | Sauce Labs Bolt T-Shirt | Sauce Labs Fleece Jacket |


  Scenario Outline: User can remove the item that selected
    When I add '<item1>' to cart
    And I add '<item2>' to cart
    And I add '<item3>' to cart
    And verify the number of badge is '3'
    And I go to shopping cart
    And I remove '<item1>' from cart
    And I remove '<item2>' from cart
    Then verify the number of badge is '1'

    Examples:
      | item1                   | item2                 | item3                    |
      | Sauce Labs Backpack     | Sauce Labs Bike Light | Sauce Labs Bolt T-Shirt  |
      | Sauce Labs Bolt T-Shirt | Sauce Labs Bike Light | Sauce Labs Fleece Jacket |

