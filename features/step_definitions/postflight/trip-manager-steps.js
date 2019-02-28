var chai = require('chai'),
chaiAsPromised = require('chai-as-promised'),
expect = chai.expect;

chai.use(chaiAsPromised);

var TripManagerPage = require('../../pages/postflight/TripManagerPage');

tripManagerPage = new TripManagerPage();

var tripManagerSteps = function () {

	this.Then(/^I should be on the Trip Manager page$/, async function () {
    await tripManagerPage.waitForPageLoad();
  });

  this.When(/^I select the Add Leg button$/, async function () {
    await tripManagerPage.addLegButton.click();
  });
  
  
};

module.exports = tripManagerSteps;
