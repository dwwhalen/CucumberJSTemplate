var EC = protractor.ExpectedConditions;
var CommonPage = require('../CommonPage');

var CalendarPage = function() {

	var commonPage = new CommonPage();

	this.calendar = element(by.id('calendar-detail-container'));
	this.aircraftEventButton = element(by.cssContainingText(".mat-button-wrapper", "AIRCRAFT EVENT"));

	this.waitForPageLoad = async function () {
		await browser.wait(EC.visibilityOf(this.calendar), 5000);
		await browser.wait(EC.elementToBeClickable(this.aircraftEventButton), 5000);
		await browser.sleep(1000);
		await commonPage.waitForPageLoad();
	}

	this.openAircraftEventModal = async function () {
		await this.aircraftEventButton.click();
	}
};

module.exports = CalendarPage;