@postflight @tripmanager
Feature: Postflight - Trip Manager

Scenario: NAvigatgion related to adding a new leg in Postflight
    Given I login to Scheduler
    When I access the Trip Manager page
    Then I should be on the Aircraft List page
    When I select the first tail
    Then I should be on the Trip Manager page
    When I select the Add Leg button
    Then I should be on the Postflight page
    When I click the Back button 
    Then I should be on the Trip Manager page
