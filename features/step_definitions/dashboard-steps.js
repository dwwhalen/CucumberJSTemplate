var chai = require('chai'),
chaiAsPromised = require('chai-as-promised'),
expect = chai.expect;

chai.use(chaiAsPromised);

var DashboardPage = require('../pages/DashboardPage');
var CalendarPage = require('../pages/preflight/CalendarPage');
var AircraftProfilePage = require('../pages/profile/AircraftProfilePage');
var AirportProfilePage = require('../pages/profile/AirportProfilePage');
var CompanyProfilePage = require('../pages/profile/CompanyProfilePage');
var PersonProfileListPage = require('../pages/profile/PersonProfileListPage');
var RolesManagementPage = require('../pages/profile/RolesManagementPage');
var AircraftListPage = require('../pages/postflight/AircraftListPage');


dashboardPage = new DashboardPage();
calendarPage = new CalendarPage();
aircraftProfilePage = new AircraftProfilePage();
airportProfilePage = new AirportProfilePage();
companyProfilePage = new CompanyProfilePage();
personProfileListPage = new PersonProfileListPage();
rolesManagementPage = new RolesManagementPage();
aircraftListPage = new AircraftListPage();

var dashboardSteps = function () {

	this.Then(/^I should be on the Dashboard page$/, async function () {
		await dashboardPage.waitForPageLoad();
		var size = await dashboardPage.dashboardItems.count();
		expect(size).to.equal(11);
	});

	this.When(/^I access the Calendar$/, async function () {
		await dashboardPage.goToCalendar();
		await calendarPage.waitForPageLoad();
	});

	this.When(/^I access the Aircraft Profile page$/, async function () {
		await dashboardPage.goToAircraftProfile();
		await aircraftProfilePage.waitForPageLoad();
	});

	this.When(/^I access the Company Profile page$/, async function () {
		await dashboardPage.goToCompanyProfile();
		await companyProfilePage.waitForPageLoad();
	});

	this.When(/^I access the People Profile page$/, async function () {
		await dashboardPage.goToPersonProfileList();
		await personProfileListPage.waitForPageLoad();
	});

	this.When(/^I access the Roles Management page$/, async function () {
		await dashboardPage.goToRolesManagement();
		await rolesManagementPage.waitForPageLoad();
	});

	this.When(/^I access the Airport Profile page$/, async function () {
		await dashboardPage.goToAirportProfile();
		await airportProfilePage.waitForPageLoad();
	});

	this.When(/^I access the Trip Manager page$/, async function () {
		await dashboardPage.goToTripManager();
		await aircraftListPage.waitForPageLoad();
	});
};

module.exports = dashboardSteps;
