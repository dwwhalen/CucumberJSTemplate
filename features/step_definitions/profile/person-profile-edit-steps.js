var chai = require('chai'),
chaiAsPromised = require('chai-as-promised'),
expect = chai.expect;

chai.use(chaiAsPromised);

var PersonProfileEditPage = require('../../pages/profile/PersonProfileEditPage');
var CommonPage = require('../../pages/CommonPage');

personProfileEditPage = new PersonProfileEditPage();
commonPage = new CommonPage();

var personProfileSteps = function () {

  this.Then(/^the Person Edit page is displayed$/, async function () {
    personProfileEditPage.waitForPageLoad();
  });

  this.When(/^I set the Middle Name value to "([^"]*)"$/, async function (value) {
    await personProfileEditPage.middleNameTextbox.clear().sendKeys(value);
  });
};

module.exports = personProfileSteps;
