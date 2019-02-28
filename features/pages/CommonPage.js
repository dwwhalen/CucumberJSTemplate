var EC = protractor.ExpectedConditions;

var CommonPage = function () {

  this.disabledSaveButton = element(by.xpath("//button[contains(@disabled,'')]//mat-icon[text()='save']"));
  this.enabledSaveButton = element(by.xpath("//button[not(@disabled)]//mat-icon[text()='save']"));
  this.spinner = element(by.className('spinner'));
  this.loadingOverlay = element(by.xpath("//*[@class='loader-overlay loader-show']"));
  this.overlayBackdrop = element(by.xpath("//*[@class='cdk-overlay-backdrop']"));

  
  this.waitForPageLoad = async function () {
	await browser.wait(EC.invisibilityOf(this.loadingOverlay), 10000);
	await browser.wait(EC.invisibilityOf(this.overlayBackdrop), 10000);
};
  
  this.waitForSaveEnabled = async function (enabled) {
		if (enabled) {
			await browser.wait(EC.visibilityOf(this.enabledSaveButton), 5000);
		}
		else
		{
			await browser.wait(EC.visibilityOf(this.disabledSaveButton), 5000);
		}
	}

	this.clickTheSaveButton = async function () {
		await browser.wait(EC.visibilityOf(this.enabledSaveButton), 5000);
		this.enabledSaveButton.click();
	}

	this.waitForToastMessageContainingText = async function (text_to_wait_for) {
		await browser.wait(EC.visibilityOf(element(by.cssContainingText(".toast-title", text_to_wait_for))), 5000, "waiting for toast message with text: " + text_to_wait_for);
	}
};
  
module.exports = CommonPage;
