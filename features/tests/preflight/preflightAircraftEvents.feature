@preflight @aircraft_events
Feature: Preflight - Aircraft Events

Scenario: Go to the Aircraft Event page
    Given I login to Scheduler
    Then I should be on the Dashboard page
    When I access the Calendar
    And I choose to view Aircraft Events
    Then I should be on the Aircraft Events modal
    When I close the Aircraft Events modal
    Then the Aircraft Events modal is closed