var EC = protractor.ExpectedConditions;
var CommonPage = require('../CommonPage');

var AircraftProfilePage = function() {

	var commonPage = new CommonPage();

	this.aircraftProfileContainer = element(by.className('profile-aircraft'));
	this.paxSeatsTextbox = element(by.xpath("//input[@placeholder='PAX SEATS']"));

	this.waitForPageLoad = async function () {
		await browser.wait(EC.visibilityOf(this.aircraftProfileContainer), 10000);
		await browser.wait(EC.visibilityOf(this.paxSeatsTextbox), 10000);
		await browser.wait(EC.visibilityOf(commonPage.disabledSaveButton), 10000);
		await commonPage.waitForPageLoad();
	}
};

module.exports = AircraftProfilePage;