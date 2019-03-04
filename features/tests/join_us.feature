@le @join_us
Feature: Leading EDJE Join Us

  Scenario: Access the Join Us page
    When I visit the Leading EDJE Home page
    And I click the Join Us link
    Then the Join Us page is displayed
    And the Openings section is displayed
    And the Benefits section is displayed
    When I click the Home link
    Then the Home page is displayed