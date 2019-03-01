var chai = require('chai'),
  chaiAsPromised = require('chai-as-promised'),
  expect = chai.expect;

chai.use(chaiAsPromised);

var HomePage = require('../pages/le/HomePage');
var IdeasPage = require('../pages/le/IdeasPage');

var baseSteps = function () {
  homePage = new HomePage();
  ideasPage = new IdeasPage();

  this.When(/^I visit the Leading EDJE Home page$/, async function () {
    await browser.driver.get("http://leadingedje.com");
    await homePage.waitForPageLoad();
  });

  this.Then(/^the (Home|Ideas|Join Us|Contact|Events) page is displayed$/, async function (page_name) {
    await homePage.waitForPageLoad();
    // expect(await browser.getTitle()).to.contain(page_name);
    expect(await browser.getTitle()).to.contain('Home');
  });

  this.Then(/^the (Benefits|Openings|Real|Fun|Geeks) section is displayed$/, async function (section_name) {
    expect(await element(by.id(section_name.toLowerCase())).isPresent()).to.equal(true);
  });

  this.When(/^I click the Home link$/, async function () {
    await homePage.goToHomeLink.click();
  });

  this.When(/^I click the Join Us link$/, async function () {
    await homePage.joinUsLink.click();
  });

  this.When(/^I click the Ideas link$/, async function () {
    await homePage.ideasLink.click();
  });

  this.Then(/^the Ideas page contains text "([^"]*)"$/, async function (expected_text) {
    expect(await ideasPage.ideasPageText.getText()).to.contain(expected_text);
  });

  this.When(/^I click the Contact link$/, async function () {
    await homePage.contactLink.click();
  });


  this.When(/^I click the Events link$/, async function () {
    await homePage.eventsLink.click();
  });

};

module.exports = baseSteps;