var EC = protractor.ExpectedConditions;
var CommonPage = require('../CommonPage');

var TripManagerPage = function() {

	var commonPage = new CommonPage();

	this.tripListContainer = element(by.xpath('//sdpost-trip-list'));
	this.tripListItems = element.all(by.xpath('//sdpost-trip-list-item'));
	this.addLegButton = element(by.cssContainingText(".mat-button-wrapper", "Add Leg"));

	this.waitForPageLoad = async function () {
		await browser.wait(EC.visibilityOf(this.tripListContainer), 20000);
		await browser.wait(EC.visibilityOf(this.tripListItems.first()), 20000);
		await browser.wait(EC.visibilityOf(this.addLegButton), 20000);
		await commonPage.waitForPageLoad();
	}
};

module.exports = TripManagerPage;