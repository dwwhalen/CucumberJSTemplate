@profile @company
Feature: Profile - Company Profile

Scenario: Company Profile page displays properly and the Save button is enabled on change
    Given I login to Scheduler
    When I access the Company Profile page
    Then the Save button is disabled
    When I set the State value to "Ohio"
    Then the Save button is enabled
    When I click the Save button
    Then the Save is successful with toast message containing "successfully updated"