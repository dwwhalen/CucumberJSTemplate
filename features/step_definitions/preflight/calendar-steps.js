var chai = require('chai'),
chaiAsPromised = require('chai-as-promised'),
expect = chai.expect;

chai.use(chaiAsPromised);

var CalendarPage = require('../../pages/preflight/CalendarPage');

calendarPage = new CalendarPage();

var calendarSteps = function () {

        this.When(/^I choose to view Aircraft Events$/, async function () {
                await calendarPage.openAircraftEventModal();
	});
};

module.exports = calendarSteps;
