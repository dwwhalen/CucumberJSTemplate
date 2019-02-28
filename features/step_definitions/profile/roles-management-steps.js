var chai = require('chai'),
chaiAsPromised = require('chai-as-promised'),
expect = chai.expect;

chai.use(chaiAsPromised);

var RolesManagementPage = require('../../pages/profile/RolesManagementPage');
var CommonPage = require('../../pages/CommonPage');

rolesManagementPage = new RolesManagementPage();
commonPage = new CommonPage();

var rolesManagementSteps = function () {
  
  this.When(/^I filter Roles by "([^"]*)"$/, async function (role_name) {
    await rolesManagementPage.FilterRolesBy(role_name);
  });

  this.Then(/^The "([^"]*)" Role is displayed$/, async function (expected_role_name) {
    expect(await rolesManagementPage.filteredRoleName.getText()).to.equal(expected_role_name);
  });

  this.When(/^I select the Admin Role$/, async function () {
    await rolesManagementPage.filteredRoleName.click();
  });

  this.Then(/^the selected Role Name is "([^"]*)"$/, async function (expected_selected_role_name) {
    var actual_selected_role_name = await rolesManagementPage.selectedRoleName.getAttribute("value");
    expect(actual_selected_role_name).to.equal(expected_selected_role_name);
  });

  this.When(/^I set the Role Name value to "([^"]*)"$/, async function (value) {
    await rolesManagementPage.selectedRoleName.clear().sendKeys(value);
  });

  this.When(/^I click the Undo Changes button$/, async function () {
    await rolesManagementPage.undoChangesButton.click();
  });
};

module.exports = rolesManagementSteps;
