var {After, Before, BeforeAll, AfterAll} = require('cucumber');
var fs = require("fs");

module.exports = function() {
	
	this.Before(function () {
      browser.driver.manage().window().maximize();
    });

	this.After(async function (scenario) {
		
		if (scenario.isFailed()) {
			var myScreenshot = await browser.takeScreenshot();
			await scenario.attach(new Buffer(myScreenshot, 'base64'), 'image/png'); 
		}
	});

}