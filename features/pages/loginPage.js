var EC = protractor.ExpectedConditions;
var DashboardPage = require('./DashboardPage');

var LoginPage = function () {
  
  dashboardPage = new DashboardPage();

  this.selectors = {
    'FIRST_FIELD': '.e2e-start-button',
    'SECOND_FIELD': '.e2e-start-button',
    'RESULT': '.e2e-result'
  };
    
  this.moreButton = element(by.xpath("//button//*[text()='more_vert']"));
  this.startButton = browser.$(this.selectors.START_BUTTON);
  this.result = browser.$(this.selectors.RESULT);

  this.email = element(by.name('email'));
  this.password = element(by.name('password'));
  this.loginButton = element(by.buttonText('Log In'));

  this.loginAndGoToDashboard = async function () {
    browser.ignoreSynchronization = true;
    
    if (await this.moreButton.isPresent()) {
      await console.log("already logged in");
      await browser.driver.get("https://scheduler.satcomtest.com/dashboard");
    }
    else {
      await console.log("logging in");
      await browser.driver.get("https://scheduler.satcomtest.com/dashboard");
      await this.waitForPageLoad();
      await this.setField('email', 'nfs-qa1@satcomdirect.com');
      await this.setField('password', 'Pass123$');
      await this.clickLogin();
    }
    await dashboardPage.waitForPageLoad();
  }

  this.waitForPageLoad = async function () {
    await browser.wait(EC.visibilityOf(element(by.name("email"))), 10000);
    await browser.wait(EC.visibilityOf(element(by.name("password"))), 10000);
    await browser.wait(EC.visibilityOf(element(by.buttonText('Log In'))), 10000);
  };

  this.setField = async function (fieldName, value) {
    if (fieldName == 'email')
      return await this.email.sendKeys(value);
    else
      return await this.password.sendKeys(value);
  };

  this.clickLogin = async function () {
    return await this.loginButton.click();
  };

  this.isResultPresent = async function () {
    return await this.result.isPresent();
  };
};
  
module.exports = LoginPage;
  