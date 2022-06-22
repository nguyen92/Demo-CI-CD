Feature:  Login to the system

  Scenario Outline: Authorized user can login to the system

    Given navigates to the url 'https://phamiliartech.com/account/sign-in'
    When user enter email '<Email>', '<Password>'
    And click on the Sign button
    And user enter PIN '<PIN>'
    And click on the Submit button
    Then user is navigated to the homepage
    Examples:
      | Email                 | Password | PIN    |
      | nppn.nguyen@gmail.com | Demo1234 | 123456 |
      | nppn.nguyen@gmail.com | Demo1234 | 123456 |


  Scenario Outline: Unauthorized user cannot access the system

    Given navigates to the url 'https://phamiliartech.com/account/sign-in'
    When user enter email '<Email>', '<Password>'
    And click on the Sign button
    Then error message is displayed
    Examples:
      | Email         | Password | PIN    |
      | abc@gmail.com | Demo1234 | 123456 |
      | abc@gmail.com | Demo1234 | 123456 |


