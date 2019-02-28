@profile @roles-management
Feature: Profile - Roles Management

Scenario: Roles Management page displays, filters, enables Save buttton when there are pending changes
    Given I login to Scheduler
    When I access the Roles Management page
    Then the Save button is disabled
    When I filter Roles by "Admin"
    Then The "Admin" Role is displayed
    When I select the Admin Role
    Then the selected Role Name is "Admin"
    And the Save button is disabled
    When I set the Role Name value to "Big Boss Man"
    Then the Save button is enabled
    When I click the Undo Changes button
    Then the Save button is disabled