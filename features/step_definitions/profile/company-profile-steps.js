var chai = require('chai'),
chaiAsPromised = require('chai-as-promised'),
expect = chai.expect;

chai.use(chaiAsPromised);

var CompanyProfilePage = require('../../pages/profile/CompanyProfilePage');
var CommonPage = require('../../pages/CommonPage');

companyProfilePage = new CompanyProfilePage();
commonPage = new CommonPage();

var companyProfileSteps = function () {

	this.Then(/^I should be on the Company Profile page$/, async function () {
        await companyProfilePage.waitForPageLoad();
    });

  this.When(/^I set the State value to "([^"]*)"$/, async function (value) {
    await companyProfilePage.stateTextbox.clear().sendKeys(value);
  });
};

module.exports = companyProfileSteps;
