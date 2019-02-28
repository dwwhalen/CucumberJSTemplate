var chai = require('chai'),
chaiAsPromised = require('chai-as-promised'),
expect = chai.expect;

chai.use(chaiAsPromised);

var AircraftEventModal = require('../../pages/preflight/AircraftEventModal');

aircraftEventModal = new AircraftEventModal();

var aircraftEventSteps = function () {

	this.Then(/^I should be on the Aircraft Events modal$/, async function () {
    await aircraftEventModal.waitForPageLoad();
  });

  this.When(/^I close the Aircraft Events modal$/, async function () {
    await aircraftEventModal.cancelButton.click();
  });

  this.Then(/^the Aircraft Events modal is closed$/, async function () {
    await aircraftEventModal.waitForPageToClose();
  });
};

module.exports = aircraftEventSteps;
