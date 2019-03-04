@le @home
Feature: Leading EDJE Home

  Scenario: Access the Home page
    When I visit the Leading EDJE Home page
    Then the Home page is displayed
    And the Real section is displayed
    And the Fun section is displayed
    And the Geeks section is displayed
    When I click the Home link
    Then the Home page is displayed