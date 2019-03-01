var EC = protractor.ExpectedConditions;

var HomePage = function() {
    
	this.goToHomeLink = element(by.id('logo'));
	this.joinUsLink = element(by.linkText("JOIN US"));
	this.ideasLink = element(by.linkText("IDEAS"));
	this.contactLink = element(by.linkText("CONTACT"));
	this.eventsLink = element(by.id('nextEvent'));

	this.waitForPageLoad = async function () {
		browser.ignoreSynchronization = true;
		await browser.wait(EC.visibilityOf(this.goToHomeLink), 5000);
		await browser.wait(EC.visibilityOf(this.joinUsLink), 5000);
		await browser.wait(EC.visibilityOf(this.ideasLink), 5000);
		await browser.wait(EC.visibilityOf(this.contactLink), 5000);
		await browser.wait(EC.visibilityOf(this.eventsLink), 5000);
	}
};

module.exports = HomePage;