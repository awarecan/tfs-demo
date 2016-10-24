var util = require('./../utils/utilities');
var pageExpectValue = require("./../expects/expects.js");
var appUtil = require('./../utils/appUtil');
var fs = require('fs');

describe("Payment estimation feature", function () {
    var hflow='./../flows/'+browser.params.RunMode+'/HomeFlow.js';
    var HomeFlow = require(hflow);
    //var HomeFlow = require('./../flows/HomeFlow.js');
    var adminUser = browser.params.users.adminUser;
    var caseFinish = false;
    beforeEach(function () {
        browser.params.currentScriptName = util.getFileName(__filename);
        caseFinish = false;
        appUtil.initTest(false);
 			console.log("beforeEach test: ======: " + hflow);
   });

    afterEach(function () {
      console.log("Demo test failed: ======1: "  );
      appUtil.cleanUpTest(caseFinish, false);
    });

    it('Demo : Get monthly payment estimation for specific model', function () {
        var AssertSystemVersionContainText = {
            "expect": "The System Version Number is " + browser.params.versionInformation.SystemVersionNumber,
            "success": "The System Version Number is {0}",
            "fail": "The System Version Number is {0}"
        };
			console.log("Demo test: ======1: " );
 
        var flow = new HomeFlow(true, true);
  			console.log("Demo test: ======2: "+ flow.step('flow is ') );
       var y=flow.step('1. Open home page, navigate to monthly payment estimation tool')
            .step('flow is ' + hflow);
            var x=y
         .navigateTo_EstimateMonthlyPaymentFlow()
            .step('2. set zip code, and then select car.');
            var a1=x
            .input_ZipCode_And_NavigateTo_BuyFlow("90505");
            //var a2=a1
            //.click_RX_HYBRIDButton_NavigateTo_BuyFlow();
            var a3=a1
            .step('3. click recalculate button to start calculate.')
            .click_RecalculateButton()
            .wait(10)
            .execute(function () {
                caseFinish = true;
            });
    //},function(err){
    //    console.log("Demo test failed: ======1: " + err );
    });
});