var HomeFlow = require('./../flows/HomeFlow.js');
var util = require('./../utils/utilities');
var pageExpectValue = require("./../expects/expects.js");
var appUtil = require('./../utils/appUtil');
var fs = require('fs');

describe("Login feature", function () {
    var adminUser = browser.params.users.adminUser;
    var caseFinish = false;
    beforeEach(function () {
        browser.params.currentScriptName = util.getFileName(__filename);
        caseFinish = false;
        appUtil.initTest(false);
    });

    afterEach(function () {
        appUtil.cleanUpTest(caseFinish, false);
    });

    it('Demo : Get monthly payment estimation for specific model', function () {
        var AssertSystemVersionContainText = {
            "expect": "The System Version Number is " + browser.params.versionInformation.SystemVersionNumber,
            "success": "The System Version Number is {0}",
            "fail": "The System Version Number is {0}"
        };

        var flow = new HomeFlow(true, true);
        flow.step('1. Open home page, navigate to monthly payment estimation tool')
            .click_FinancialToolsButton()
            .click_EstimateMonthlyPaymentLink_NavigateTo_EstimateMonthlyPaymentFlow()
            .setValue_ZipCodeTextBox("90505")
            .click_RX_HYBRIDButton_NavigateTo_BuyFlow()
            .click_RecalculateButton()
            .execute(function () {
                caseFinish = true;
            });
    });
});