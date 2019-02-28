var chai = require('chai'),
chaiAsPromised = require('chai-as-promised'),
expect = chai.expect;

chai.use(chaiAsPromised);

var AircraftListPage = require('../../pages/postflight/AircraftListPage');

aircraftListPage = new AircraftListPage();

var aircraftListSteps = function () {

	this.Then(/^I should be on the Aircraft List page$/, async function () {
    await aircraftListPage.waitForPageLoad();
  });
  
  this.When(/^I select the first tail$/, async function () {
    await aircraftListPage.firstTailNumber.click();
  });

};

module.exports = aircraftListSteps;
