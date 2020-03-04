Feature: The Facebook to open a social network page
  
  Scenario: login to admin
    Given I login 
    Then I visit admin
    Then I should see page normal