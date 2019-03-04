@le @ideas
Feature: Leading EDJE Ideas

  Scenario: Validate Ideas page mentions me
    When I visit the Leading EDJE Home page
    And I click the Ideas link
    Then the Ideas page is displayed
    And the Ideas page contains text "By Dennis Whalen"
    When I click the Home link
    Then the Home page is displayed

  Scenario Outline: Access the Ideas, Contact, and Events page
    When I visit the Leading EDJE Home page
    And I click the <page> link
    Then the <page> page is displayed
    When I click the Home link
    Then the Home page is displayed
    Examples:
      | page    |
      | Ideas   |
      | Contact |
      | Events  |


