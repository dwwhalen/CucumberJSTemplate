var EC = protractor.ExpectedConditions;
var CommonPage = require('../CommonPage');

var PersonProfilePage = function() {

	var commonPage = new CommonPage();

	this.companyProfileContainer = element(by.className('profile-company'));
	this.middleNameTextbox = element(by.xpath("//input[@placeholder='Middle Name']"));

	this.waitForPageLoad = async function () {
		await browser.wait(EC.visibilityOf(this.middleNameTextbox), 10000, "waiting for middleNameTextbox");
		await browser.wait(EC.visibilityOf(commonPage.disabledSaveButton), 10000, "waiting for disabledSaveButton");
		await browser.wait(EC.invisibilityOf(commonPage.spinner), 10000, "waiting for the spinner to disappear");
		await commonPage.waitForPageLoad();
	}
};

module.exports = PersonProfilePage;