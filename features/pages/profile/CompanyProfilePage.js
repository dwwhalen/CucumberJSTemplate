var EC = protractor.ExpectedConditions;
var CommonPage = require('../CommonPage');

var CompanyProfilePage = function() {

	var commonPage = new CommonPage();

	this.companyProfileContainer = element(by.className('profile-company'));
	this.stateTextbox = element(by.xpath("//input[@placeholder='STATE/PROVINCE']"));

	this.waitForPageLoad = async function () {
		await browser.wait(EC.visibilityOf(this.companyProfileContainer), 10000, "waiting for companyProfileContainer");
		await browser.wait(EC.visibilityOf(this.stateTextbox), 10000, "waiting for stateTextbox");
		await browser.wait(EC.visibilityOf(commonPage.disabledSaveButton), 10000, "waiting for disabledSaveButton");
		await commonPage.waitForPageLoad();
	}
};

module.exports = CompanyProfilePage;