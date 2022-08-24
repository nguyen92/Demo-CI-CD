Feature: Login  

  Background:  Open the page
  Given navigates to the url 'https://www.saucedemo.com/'
  
  Scenario: As a standard user I can access to the system
    When I enter username 'standard_user'
    And enter password 'secret_sauce'
    And I click on the Login button 
    Then I can access the system
  
  Scenario: As a locked user I cannot access to the system
    When I enter username 'locked_out_user'
    And enter password 'secret_sauce'
    And I click on the Login button 
    Then the error message 'Epic sadface: Sorry, this user has been locked out.' displays

