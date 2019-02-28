var EC = protractor.ExpectedConditions;
var CommonPage = require('../CommonPage');

var PersonProfileListPage = function() {

	var commonPage = new CommonPage();

	this.personList = element(by.xpath('//sdp-profile-person-list'));
	this.personRow = element.all(by.className('e2e-person-row')).first();

	this.waitForPageLoad = async function () {
		await browser.wait(EC.visibilityOf(this.personList), 10000, "waiting for personList");
		await browser.wait(EC.elementToBeClickable(this.personRow), 10000, "waiting for personRow");
		await browser.wait(EC.invisibilityOf(commonPage.spinner), 10000, "waiting for the spinner to disappear");
		await commonPage.waitForPageLoad();
	}
};

module.exports = PersonProfileListPage;