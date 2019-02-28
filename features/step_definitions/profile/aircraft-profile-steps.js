var chai = require('chai'),
chaiAsPromised = require('chai-as-promised'),
expect = chai.expect;

chai.use(chaiAsPromised);

var AircraftProfilePage = require('../../pages/profile/AircraftProfilePage');
var CommonPage = require('../../pages/CommonPage');

aircraftProfilePage = new AircraftProfilePage();
commonPage = new CommonPage();

var aircraftProfileSteps = function () {

	this.Then(/^I should be on the Aircraft Profile page$/, async function () {
        await aircraftProfilePage.waitForPageLoad();
  });

  this.When(/^I set the Pax Seats value to (\d+)$/, async function (value) {
    await aircraftProfilePage.paxSeatsTextbox.clear().sendKeys(value);
  });

};

module.exports = aircraftProfileSteps;
