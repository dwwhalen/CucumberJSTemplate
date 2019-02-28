var EC = protractor.ExpectedConditions;
var CommonPage = require('../CommonPage');

var AircraftListPage = function() {

	var commonPage = new CommonPage();

	this.aircraftList = element(by.xpath('//sdpost-aircraft-list'));
	this.firstTailNumber = element.all(by.className('tail-number')).first();

	this.waitForPageLoad = async function () {
		await browser.wait(EC.visibilityOf(this.aircraftList), 20000);
		await browser.wait(EC.visibilityOf(this.firstTailNumber), 20000);
		await commonPage.waitForPageLoad();
	}
};

module.exports = AircraftListPage;