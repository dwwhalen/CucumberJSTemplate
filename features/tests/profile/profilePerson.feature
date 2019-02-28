@profile @person
Feature: Profile - Company Profile

Scenario: Person Profile page displays and changes are successfully saved
    Given I login to Scheduler
    When I access the People Profile page
    And I select the first person in the list
    Then the Person Edit page is displayed
    And the Save button is disabled
    When I set the Middle Name value to "Abigail"
    Then the Save button is enabled
    When I click the Save button
    Then the Save is successful with toast message containing "Success"