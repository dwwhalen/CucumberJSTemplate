var EC = protractor.ExpectedConditions;
var CommonPage = require('../CommonPage');

var AirportProfilePage = function() {

	var commonPage = new CommonPage();

	this.airportSearchTextbox = element(by.xpath("//input[@placeholder='SEARCH AIRPORT IDENTIFIER']"));
	this.radiusMilesCheckbox = element(by.id("mat-checkbox-1"));
	this.searchMatchDropdown = element(by.className('search-match'));
	

	this.waitForPageLoad = async function () {
		await browser.wait(EC.visibilityOf(this.airportSearchTextbox), 10000);
		await browser.wait(EC.visibilityOf(this.radiusMilesCheckbox), 10000);
		await commonPage.waitForPageLoad();
	}

	this.searchForAirport = async function (search_criteria) {
		await this.airportSearchTextbox.clear().sendKeys(search_criteria);
		await browser.wait(EC.visibilityOf(this.searchMatchDropdown), 10000);
		await this.searchMatchDropdown.click();
	}

	this.airportResultsExists = async function (search_criteria) {
		resultsRowXpath = "//tr[contains(@class, 'e2e-airport-row')]//td[text()='" + search_criteria + "']";
		return await browser.wait(EC.visibilityOf(element(by.xpath(resultsRowXpath))), 20000);
	}

	this.selectAirportResultsRow = async function (airport_to_select) {
		resultsRowElement = element(by.xpath("//tr[contains(@class, 'e2e-airport-row')]//td[text()='" + airport_to_select + "']"));
		await browser.wait(EC.visibilityOf(resultsRowElement), 20000);
		element(by.xpath(resultsRowXpath)).click();
	}
};

module.exports = AirportProfilePage;