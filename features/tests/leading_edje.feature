@le
Feature: Users interact with the public Leading EDJE site

  Scenario: Access the Home page
    When I visit the Leading EDJE Home page
    Then the Home page is displayed
    And the Real section is displayed
    And the Fun section is displayed
    And the Geeks section is displayed
    When I click the Home link
    Then the Home page is displayed

  Scenario: Access the Join Us page
    When I visit the Leading EDJE Home page
    And I click the Join Us link
    Then the Join Us page is displayed
    And the Openings section is displayed
    And the Benefits section is displayed
    When I click the Home link
    Then the Home page is displayed

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


