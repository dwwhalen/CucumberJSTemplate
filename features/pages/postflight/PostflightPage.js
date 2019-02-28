var EC = protractor.ExpectedConditions;
var CommonPage = require('../CommonPage');

var PostflightPage = function() {

	var commonPage = new CommonPage();

	this.backButton = element(by.cssContainingText(".mat-button-wrapper", "chevron_left"));
	this.outTime = element(by.xpath('//sd-time-input[@matlabel="OUT"]//input'));
	this.offTime = element(by.xpath('//sd-time-input[@matlabel="OFF"]//input'));
	this.onTime = element(by.xpath('//sd-time-input[@matlabel="ON"]//input'));
	this.inTime = element(by.xpath('//sd-time-input[@matlabel="IN"]//input'));

	this.waitForPageLoad = async function () {
		await browser.wait(EC.visibilityOf(commonPage.disabledSaveButton), 10000);
		await browser.wait(EC.visibilityOf(this.outTime), 10000);
		await browser.wait(EC.visibilityOf(this.offTime), 10000);
		await browser.wait(EC.visibilityOf(this.onTime), 10000);
		await browser.wait(EC.visibilityOf(this.inTime), 10000);
		await browser.wait(EC.visibilityOf(this.backButton), 10000);
		await commonPage.waitForPageLoad();
	}
};

module.exports = PostflightPage;