var EC = protractor.ExpectedConditions;
var path = require('path');
var CommonPage = require( path.resolve( __dirname, "./CommonPage.js" ) );

var DashboardPage = function() {

	var commonPage = new CommonPage();

	this.dashboardItems = element.all(by.className('dashboard-item'));
	this.calendarButton = element(by.xpath("//label[contains(text(),'Calendar')]"));
	this.aircraftProfileButton = element(by.xpath("//label[contains(text(),'Aircraft')]"));
	this.airportProfileButton = element(by.xpath("//label[contains(text(),'Airport')]"));
	this.companyProfileButton = element(by.xpath("//label[contains(text(),'Company')]"));
	this.personProfileButton = element(by.xpath("//label[contains(text(),'People')]"));
	this.rolesManagementButton = element(by.xpath("//label[contains(text(),'Roles Management')]"));
	this.tripManagerButton = element(by.xpath("//label[contains(text(),'Trip Manager')]"));

	this.moreButton = element(by.xpath("//button//*[text()='more_vert']"));
	this.logoutButton = element(by.xpath("//button//*[text()='exit_to_app']"));

	this.get = function() {
		browser.get('https://scheduler.satcomtest.com/dashboard');
	};

	this.waitForPageLoad = async function () {
		await browser.wait(EC.visibilityOf(this.calendarButton), 10000, "Waiting for calendarButton");
		await browser.wait(EC.visibilityOf(this.aircraftProfileButton), 10000, "Waiting for aircraftProfileButton");
		await browser.wait(EC.visibilityOf(this.companyProfileButton), 10000), "Waiting for companyProfileButton";
		await browser.wait(EC.visibilityOf(this.personProfileButton), 10000), "Waiting for personProfileButton";
		await browser.wait(EC.visibilityOf(this.moreButton), 10000, "Waiting for moreButton");
		await commonPage.waitForPageLoad();
	}

	this.goToCalendar = async function () {
		await browser.wait(EC.visibilityOf(this.calendarButton), 5000);
		await this.calendarButton.click();
	}

	this.goToAircraftProfile = async function () {
		await browser.wait(EC.visibilityOf(this.aircraftProfileButton), 5000);
		await this.aircraftProfileButton.click();
	}

	this.goToCompanyProfile = async function () {
		await browser.wait(EC.visibilityOf(this.companyProfileButton), 5000);
		await this.companyProfileButton.click();
	}

	this.goToPersonProfileList = async function () {
		await browser.wait(EC.visibilityOf(this.personProfileButton), 5000);
		await this.personProfileButton.click();
	}

	this.goToRolesManagement = async function () {
		await browser.wait(EC.visibilityOf(this.rolesManagementButton), 5000);
		await this.rolesManagementButton.click();
	}
	
	this.goToAirportProfile = async function () {
		await browser.wait(EC.visibilityOf(this.airportProfileButton), 5000);
		await this.airportProfileButton.click();
	}

	this.goToTripManager = async function () {
		await browser.wait(EC.visibilityOf(this.tripManagerButton), 5000);
		await this.tripManagerButton.click();
	}

	this.logout = async function () {
		await browser.wait(EC.visibilityOf(this.moreButton), 5000);
		await this.moreButton.click();
		await browser.wait(EC.visibilityOf(this.logoutButton), 5000);
		await this.logoutButton.click();
	  };
};

module.exports = DashboardPage;