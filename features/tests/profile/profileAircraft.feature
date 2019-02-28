@profile @aircraft
Feature: Profile - Aircraft Profile

Scenario: Aircraft Profile page displays properly and the Save button is enabled on change
    Given I login to Scheduler
    When I access the Aircraft Profile page
    Then the Save button is disabled
    When I set the Pax Seats value to 4
    Then the Save button is enabled
    When I click the Save button
    Then the Save is successful with toast message containing "successfully updated"