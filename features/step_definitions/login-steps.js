var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var loginPage = require('../pages/LoginPage');

loginPage = new loginPage();

var loginSteps = function () {

  this.Given(/^I login to Scheduler$/, async function () {
    await loginPage.loginAndGoToDashboard();
  });
};

module.exports = loginSteps;