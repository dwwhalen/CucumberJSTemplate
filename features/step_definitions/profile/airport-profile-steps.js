var chai = require('chai'),
chaiAsPromised = require('chai-as-promised'),
expect = chai.expect;

chai.use(chaiAsPromised);

var AirportProfilePage = require('../../pages/profile/AirportProfilePage');
var AirportModalPage = require('../../pages/profile/AirportModalPage');
var CommonPage = require('../../pages/CommonPage');

airportProfilePage = new AirportProfilePage();
airportModalPage = new AirportModalPage();
commonPage = new CommonPage();

var airportProfileSteps = function () {

    this.Then(/^I should be on the Airport Profile page$/, async function () {
        await airportProfilePage.waitForPageLoad();
    });

    this.When(/^I search for airport "([^"]*)"$/, async function (search_criteria) {
        await airportProfilePage.searchForAirport(search_criteria);
    });

    this.Then(/^airport "([^"]*)" is displayed$/, async function (expected_airport) {
        expect(await airportProfilePage.airportResultsExists(expected_airport)).to.equal(true);
    });

    this.Then(/^I click on airport "([^"]*)"$/, async function (airport_to_select) {
        await airportProfilePage.selectAirportResultsRow(airport_to_select);
    });

    this.Then(/^the Airport Modal is displayed$/, async function () {
        await airportProfilePage.waitForPageLoad();
    });

    this.When(/^I click the "([^"]*)" section$/, async function (section_name) {
        await airportModalPage.expandSection(section_name);
    });

    this.Then(/^the "([^"]*)" section is expanded$/, async function (section_name) {
        expect(await airportModalPage.sectionIsExpanded(section_name)).to.equal(true);
      });

    this.Then(/^the "([^"]*)" tab is active$/, async function (tab_name) {
        expect(await airportModalPage.tabIsActive(tab_name)).to.equal(true);
    });

    this.When(/^I select the "([^"]*)" tab$/, async function (tab_name) {
        await airportModalPage.selectTab(tab_name);
    });

    this.When(/^I click the first Runway$/, async function () {
        await airportModalPage.expandFirstRunway();
    });

    this.Then(/^the first runway is expanded$/, async function () {
        expect(await airportModalPage.isFirstRunwayExpanded()).to.equal('true');
    });
};

module.exports = airportProfileSteps;