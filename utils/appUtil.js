var util = require('./utilities');
var that;

var appUtil = function(){
	that = this;
};
var HomeFlow = require('./../flows/'+browser.params.RunMode+'/HomeFlow.js');
/**
 * Init Test Case(page)
 * if user == undefined or null ,it will goto Home Page
 * @param user
 * @constructor
 */
appUtil.prototype.initTest=function(user) {
			console.log("initTest test: ======: " );
	var homeFlow = new HomeFlow();
			console.log("initTest test: ======2: " );
	browser.getCurrentUrl().then(function (url) {
			console.log("initTest test: ======3: " );
		//console.log('current url: '+url);
		if (undefined === user || null === user) {
			console.log("initTest test: ======4: " );
			homeFlow.step('Init Test: go to home page.').gotoPage();
		}
			console.log("initTest test: ======5: " );
	}, function (err) {
		console.log('err' + err);
	});
};

/**
 * goto the Home Page.
 * @param needLogout
 * @constructor
 */
appUtil.prototype.cleanUpTest=function(caseFinish, needLogout) {

	var homeflow = new HomeFlow();
	that.handleCaseException(caseFinish);
	browser.switchTo().alert().then(function (alert) {
		alert.getText().then(function (text) {
			console.log("Clean up test: Meet alert: " + text);
		});
		alert.dismiss();
	}, function (err) {
		//console.log('switch to alert err:'+err);
	});
	//browser.driver.get(browser.params.baseUrl);
	homeflow.step('Clean up test, go to home page.').gotoPage();
};

appUtil.prototype.handleCaseException=function(caseFinish){
	if (false === caseFinish) {
		var homeflow = new HomeFlow();
		homeflow.takeScreenForLog(function (msg) {
			console.error('Warning: The Case terminate with exception, detail please see html log. screenshot here: ' + msg);
		});
	}
};

module.exports = new appUtil();
