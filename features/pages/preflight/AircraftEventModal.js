var EC = protractor.ExpectedConditions;
var CommonPage = require('../CommonPage');

var AircraftEventModal = function () {

    var commonPage = new CommonPage();

    this.tailSelectorDropdown = element(by.xpath("//mat-select[@formcontrolname='acProfile']"));
    this.eventTypeSelector = element(by.xpath("//mat-select[@placeholder='EVENT TYPE']"));

    this.startICAO = element(by.xpath("//input[@placeholder='START ICAO']"));
    this.endICAO = element(by.xpath("//input[@placeholder='END ICAO']"));
    this.startDate = element(by.xpath("//input[@placeholder='START DATE']"));
    this.endDate = element(by.xpath("//input[@placeholder='END DATE']"));
    this.startTime = element(by.xpath("//input[@placeholder='START TIME']"));
    this.endTime = element(by.xpath("//input[@placeholder='END TIME']"));

    this.notesTextarea = element(by.xpath("//textarea[@placeholder='NOTES']"));
    this.requester = element(by.xpath("//input[@placeholder='Requester']"));
    this.planner = element(by.xpath("//input[@placeholder='Planner']"));
    this.approver = element(by.xpath("//input[@placeholder='Approver']"));

    this.cancelButton = element(by.cssContainingText(".mat-button-wrapper", "CANCEL"));
    this.saveButton = element(by.cssContainingText(".mat-button-wrapper", "SAVE"));
    this.deleteEventButton = element(by.cssContainingText(".mat-button-wrapper", " DELETE EVENT "));
    this.confirmDeleteButton = element(by.cssContainingText(".mat-button-wrapper", "Yes"));

    this.eventSavedMessage = element(by.cssContainingText(".toast-title", "Aircraft Event has been saved"));
    this.eventDeletedMessage = element(by.cssContainingText(".toast-title", "Event deleted successfully"));

    this.waitForPageLoad = async function () {
        await browser.wait(EC.visibilityOf(this.tailSelectorDropdown), 15000, "Waiting for tailSelectorDropdown");
        await browser.wait(EC.visibilityOf(this.eventTypeSelector), 15000, "Waiting for eventTypeSelector");
        await browser.wait(EC.visibilityOf(this.startICAO), 15000, "Waiting for startICAOPicker");
        await browser.wait(EC.visibilityOf(this.endICAO), 15000, "Waiting for endICAOPicker");
        await browser.wait(EC.visibilityOf(this.startDate), 15000, "Waiting for startDate");
        await browser.wait(EC.visibilityOf(this.endDate), 15000, "Waiting for endDate");
        await browser.wait(EC.visibilityOf(this.startTime), 15000, "Waiting for startTime");
        await browser.wait(EC.visibilityOf(this.endTime), 15000, "Waiting for endTime");

        await browser.wait(EC.visibilityOf(this.notesTextarea), 15000, "Waiting for notesTextarea");
        await browser.wait(EC.visibilityOf(this.requester), 15000, "Waiting for requester");
        await browser.wait(EC.visibilityOf(this.planner), 15000, "Waiting for planner");
        await browser.wait(EC.visibilityOf(this.approver), 15000, "Waiting for approver");
        await browser.wait(EC.visibilityOf(this.cancelButton), 15000, "Waiting for cancelButton");
        await browser.wait(EC.visibilityOf(this.saveButton), 15000, "Waiting for saveButton");
        await commonPage.waitForPageLoad();
    };

    this.waitForPageToClose = async function () {
        await browser.wait(EC.invisibilityOf(this.tailSelectorDropdown), 15000, "Waiting for tailSelectorDropdown to disappear");
        await browser.wait(EC.invisibilityOf(this.cancelButton), 15000, "Waiting for cancelButton to disappear");
        await browser.wait(EC.invisibilityOf(this.saveButton), 15000, "Waiting for saveButton to disappear");
    };
};

module.exports = AircraftEventModal;