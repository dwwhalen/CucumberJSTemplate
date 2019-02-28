var chai = require('chai'),
chaiAsPromised = require('chai-as-promised'),
expect = chai.expect;

chai.use(chaiAsPromised);

var PostflightPage = require('../../pages/postflight/PostflightPage');

postflightPage = new PostflightPage();

var postflightSteps = function () {

	this.Then(/^I should be on the Postflight page$/, async function () {
    await postflightPage.waitForPageLoad();
  });

  this.When(/^I click the Back button$/, async function () {
    await postflightPage.backButton.click();
  });
  
};

module.exports = postflightSteps;
