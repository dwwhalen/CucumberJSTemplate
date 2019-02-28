var EC = protractor.ExpectedConditions;
var CommonPage = require('../CommonPage');

var AirportModalPage = function() {

	var commonPage = new CommonPage();
	
    this.doneButton = element(by.cssContainingText(".mat-button-wrapper", "DONE"));
	this.saveButton = element(by.cssContainingText(".mat-button-wrapper", "SAVE"));
	this.generalInfoSummaryPanel = element(by.cssContainingText(".mat-expansion-panel-header-title", "AIRPORT SUMMARY"));
	this.generalInfoLocationPanel = element(by.cssContainingText(".mat-expansion-panel-header-title", "LOCATION"));
	this.generalInfoLocationCityTextbox = element(by.xpath("//input[@placeholder='CITY']"));
	this.generalInfoOperationsPanel = element(by.cssContainingText(".mat-expansion-panel-header-title", "OPERATIONS"));
	this.generalInfoCommunicationPanel = element(by.cssContainingText(".mat-expansion-panel-header-title", "COMMUNICATION"));
	this.generalInfoCustomsPanel = element(by.cssContainingText(".mat-expansion-panel-header-title", "CUSTOMS/IMMIGRATION/AGRICULTURE"));
	this.generalInfoNotesPanel = element(by.cssContainingText(".mat-expansion-panel-header-title", "NOTES"));

	this.runways = element.all(by.xpath("//mat-expansion-panel-header[contains(@class, 'container-fluid')]"));

	this.waitForPageLoad = async function () {
		await browser.wait(EC.visibilityOf(this.doneButton), 10000);
		await browser.wait(EC.visibilityOf(this.saveButton), 10000);
		await browser.wait(EC.visibilityOf(this.generalInfoSummaryPanel), 10000);
		await browser.wait(EC.visibilityOf(this.generalInfoLocationPanel), 10000);
		await browser.wait(EC.visibilityOf(this.generalInfoOperationsPanel), 10000);
		await browser.wait(EC.visibilityOf(this.generalInfoCommunicationPanel), 10000);
		await browser.wait(EC.visibilityOf(this.generalInfoCustomsPanel), 10000);
		await browser.wait(EC.visibilityOf(this.generalInfoNotesPanel), 10000);
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
		await element(by.xpath(resultsRowXpath)).click();
	}

	this.expandSection = async function (section_name) {
		sectionElement = await element(by.xpath("//mat-expansion-panel-header[@aria-expanded='false']//*[@class='panel-title' and text()='" + section_name + "']"));
		await browser.wait(EC.visibilityOf(sectionElement), 5000);
		await browser.wait(EC.invisibilityOf(commonPage.loadingOverlay), 10000);
		await sectionElement.click();
	}

	this.sectionIsExpanded = async function (section_name) {
		sectionElement = await element(by.xpath("//mat-expansion-panel-header[@aria-expanded='true']//*[@class='panel-title' and text()='" + section_name + "']"));
		return await browser.wait(EC.visibilityOf(sectionElement), 5000);
	}
	
	this.tabIsActive = async function (tab_name) {
		tabElement = await element(by.cssContainingText(".mat-tab-label-active", tab_name));
		return await browser.wait(EC.visibilityOf(tabElement), 5000, "waiting for tab to be active: " + tab_name);
	}

	this.selectTab = async function (tab_name) {
		tabElement = await element(by.cssContainingText(".mat-tab-label", tab_name));
		await browser.wait(EC.visibilityOf(tabElement), 5000);
		await browser.wait(EC.invisibilityOf(commonPage.loadingOverlay), 10000);
		await tabElement.click();
		return await browser.wait(EC.visibilityOf(tabElement), 5000, "waiting for tab to be active: " + tab_name);
	}

	this.expandFirstRunway = async function () {
		var firstRunwayElement = await this.runways.first();
		await browser.wait(EC.elementToBeClickable(firstRunwayElement), 5000);
		await firstRunwayElement.click();
	}

	this.isFirstRunwayExpanded = async function () {
		return await this.runways.first().getAttribute('aria-expanded');
	}
};

module.exports = AirportModalPage;