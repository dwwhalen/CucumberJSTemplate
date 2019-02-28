var CommonPage = require('../pages/CommonPage');
commonPage = new CommonPage();

var commonSteps = function () {

    this.Then(/^the Save button is (enabled|disabled)$/, async function (enabled_or_disabled) {
        await commonPage.waitForSaveEnabled(enabled_or_disabled == 'enabled');
    });

    this.When(/^I click the Save button$/, async function () {
        await commonPage.clickTheSaveButton();
    });

    this.Then(/^the Save is successful with toast message containing "([^"]*)"$/, async function (toast_text) {
        await commonPage.waitForToastMessageContainingText(toast_text);
      });
};

module.exports = commonSteps;