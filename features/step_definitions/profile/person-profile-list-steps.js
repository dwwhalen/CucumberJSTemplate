var chai = require('chai'),
chaiAsPromised = require('chai-as-promised'),
expect = chai.expect;

chai.use(chaiAsPromised);

var PersonProfileListPage = require('../../pages/profile/PersonProfileListPage');
var CommonPage = require('../../pages/CommonPage');

personProfileListPage = new PersonProfileListPage();
commonPage = new CommonPage();

var personProfileListSteps = function () {
  this.When(/^I select the first person in the list$/, async function () {
    await personProfileListPage.personRow.click();
  });
};

module.exports = personProfileListSteps;
