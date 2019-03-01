var EC = protractor.ExpectedConditions;

var IdeasPage = function() {
    
	this.ideasPageText = element(by.id('ideas'));
};

module.exports = IdeasPage;