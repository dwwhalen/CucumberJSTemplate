@profile @airport
Feature: Profile - Airport Profile

Scenario: View the General Info tab of the Airport Modal
    Given I login to Scheduler
    When I access the Airport Profile page
    And I search for airport "KCMH"
    Then airport "KCMH" is displayed
    And I click on airport "KCMH"
    Then the Airport Modal is displayed
    And the "GENERAL INFO" tab is active
    And the "AIRPORT SUMMARY" section is expanded
    When I click the "LOCATION" section
    Then the "LOCATION" section is expanded
    When I click the "OPERATIONS" section
    Then the "OPERATIONS" section is expanded
    When I click the "COMMUNICATION" section
    Then the "COMMUNICATION" section is expanded
    When I click the "CUSTOMS/IMMIGRATION/AGRICULTURE" section
    Then the "CUSTOMS/IMMIGRATION/AGRICULTURE" section is expanded
    When I click the "NOTES" section
    Then the "NOTES" section is expanded

    Scenario: View the Runways tab of the Airport Modal
    Given I login to Scheduler
    When I access the Airport Profile page
    And I search for airport "KCMH"
    Then airport "KCMH" is displayed
    And I click on airport "KCMH"
    Then the Airport Modal is displayed
    When I select the "RUNWAYS" tab
    And I click the first Runway
    Then the first runway is expanded