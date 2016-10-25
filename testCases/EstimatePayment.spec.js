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
        var flow = new HomeFlow(true, true);
        flow.step('1. Open home page, navigate to monthly payment estimation tool')
            .click_PaymentEstimatorLink_NavigateTo_EstimateMonthlyPaymentFlow()
            .click_HybirdsButton()
            .setValue_ZipCodeTextBox("90505")
            .click_StartButton()
            .click_RX_HYBRIDButton_NavigateTo_SelectTrimFlow()
            .click_TrimLink_NavigateTo_DetailFlow()
            .wait_LoadingLabel_Disappeared()
            .assert_Term60MonthLabel_ContainText("695")
            .click_BuyLink()
            .wait_LoadingLabel_Disappeared()
            .assert_Term60MonthLabel_ContainText("1,008")
            .execute(function () {
                caseFinish = true;
            });
    });
});