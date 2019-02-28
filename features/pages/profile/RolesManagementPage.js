var EC = protractor.ExpectedConditions;
var CommonPage = require('../CommonPage');

var RolesManagementPage = function() {

	var commonPage = new CommonPage();

	this.filterRolesTextbox = element(by.xpath("//input[@placeholder='Filter Roles']"));
	this.filteredRoleName = element(by.xpath("//*[@class='mat-list-item-content']//h4"));
	this.filteredRoleDescription = element(by.xpath("//*[@class='mat-list-item-content']//p"));
	this.selectedRoleName = element(by.xpath("//input[@placeholder='Role Name']"));
	this.undoChangesButton = element(by.xpath("//*[contains(text(), 'Undo Changes')]"));

	this.waitForPageLoad = async function () {
		await browser.wait(EC.visibilityOf(this.filterRolesTextbox), 10000, "waiting for filterRolesTextbox");
		await browser.wait(EC.visibilityOf(commonPage.disabledSaveButton), 10000, "waiting for disabledSaveButton");
		await commonPage.waitForPageLoad();
	}

	this.FilterRolesBy = async function (role_name) {
		await this.filterRolesTextbox.clear().sendKeys(role_name);
		await browser.wait(EC.visibilityOf(this.filteredRoleName), 5000, "waiting for filteredRoleName");
	}
};

module.exports = RolesManagementPage;