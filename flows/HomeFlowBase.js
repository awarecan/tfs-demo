// ------------------------------------------------------------------------------
//      This code was generated by handlebars/grunt.
//
//      Changes to this file may cause incorrect behavior and will be lost if
//      the code is regenerated.
// ------------------------------------------------------------------------------

var HomePage = require('./../pages/HomePage.js');
var FlowBase = require('./../flows/baseFlow.js');


function HomeFlowBase(checkUrl, goto) {
    checkUrl = checkUrl || false;
    goto = goto || false;
    this.page = new HomePage();
    FlowBase.call(this, checkUrl, this.page.pageUrl, goto);
};

HomeFlowBase.prototype = new FlowBase();

HomeFlowBase.prototype.constructor = HomeFlowBase;


  // Navigation for PaymentEstimatorLink
  HomeFlowBase.prototype.click_PaymentEstimatorLink_NavigateTo_EstimateMonthlyPaymentFlow = function () {
        var that = this;
      var EstimateMonthlyPaymentFlow = require('./../flows/EstimateMonthlyPaymentFlow.js');
      this.takeScreenForLog(function(msg){
      that.logDebug('Click PaymentEstimator Link then navigate to EstimateMonthlyPaymentFlow. '+msg);
    });
    this.page.PaymentEstimatorLink.click();
    return new EstimateMonthlyPaymentFlow(true, false);
  };

  // Control functions for PaymentEstimatorLink
  HomeFlowBase.prototype.click_PaymentEstimatorLink = function () {
      var that = this;
      this.takeScreenForLog(function(msg){
      that.logDebug('Click PaymentEstimator Link. '+msg);
    });
    this.page.PaymentEstimatorLink.click();
    return this;
  };





  // Wait functions for PaymentEstimatorLink
  HomeFlowBase.prototype.wait_PaymentEstimatorLink_Displayed = function () {
    this.logDebug('Wait until PaymentEstimator Link displayed');
    this.page.PaymentEstimatorLink.waitPresent(true);
    return this;
  };

  HomeFlowBase.prototype.wait_PaymentEstimatorLink_Disappeared = function () {
    this.logDebug('Wait until PaymentEstimator Link disappeared');
    this.page.PaymentEstimatorLink.waitForDisappear();
    return this;
  };

  // Assert functions for PaymentEstimatorLink
  HomeFlowBase.prototype.assert_PaymentEstimatorLink_ContainText = function (text,msgOptions) {
    //this.logDebug('Assert PaymentEstimator Link contains text: ' + text);
    this.assertIsContain(this.page.PaymentEstimatorLink.getText(), text,msgOptions,'Assert PaymentEstimator Link contains text: ' + text);
    return this;
  };

  HomeFlowBase.prototype.assert_PaymentEstimatorLink_NotContainText = function (text,msgOptions) {
    //this.logDebug('Assert PaymentEstimator Link does not contain text: ' + text);
    this.assertIsNotContain(this.page.PaymentEstimatorLink.getText(), text,msgOptions,'Assert PaymentEstimator Link does not contain text: ' + text);
    return this;
  };

  HomeFlowBase.prototype.assert_PaymentEstimatorLink_TextMatchPattern = function (pattern,msgOptions) {
    //this.logDebug('Assert PaymentEstimator Link text match pattern: ' + pattern);
    this.assertIsMatchPattern(this.page.PaymentEstimatorLink.getText(), pattern, msgOptions, 'Assert PaymentEstimator Link text match pattern: ' + pattern);
    return this;
  };

  HomeFlowBase.prototype.assert_PaymentEstimatorLink_Attribute_ContainText = function (attribute, text,msgOptions) {
    //this.logDebug('Assert PaymentEstimator Link attribute[' + attribute + '] contains text: ' + text);
    this.assertIsContain(this.page.PaymentEstimatorLink.getAttribute(attribute), text,msgOptions,'Assert PaymentEstimator Link attribute[' + attribute + '] contains text: ' + text);
    return this;
  };

  HomeFlowBase.prototype.assert_PaymentEstimatorLink_Attribute_NotContainText = function (attribute,text,msgOptions) {
    //this.logDebug('Assert PaymentEstimator Link attribute[' + attribute + '] does not contain text: ' + text);
    this.assertIsNotContain(this.page.PaymentEstimatorLink.getAttribute(attribute), text,msgOptions,'Assert PaymentEstimator Link attribute[' + attribute + '] does not contain text: ' + text);
    return this;
  };

  HomeFlowBase.prototype.assert_PaymentEstimatorLink_Attribute_MatchPattern = function (attribute,pattern,msgOptions) {
    //this.logDebug('Assert PaymentEstimator Link attribute[' + attribute + '] match pattern: ' + pattern);
    this.assertIsMatchPattern(this.page.PaymentEstimatorLink.getAttribute(attribute), pattern,msgOptions,'Assert PaymentEstimator Link attribute[' + attribute + '] match pattern: ' + pattern);
    return this;
  };

  HomeFlowBase.prototype.assert_PaymentEstimatorLink_IsDisplayed = function (msgOptions) {
    //this.logDebug('Assert PaymentEstimator Link is displayed.');
    this.assertTrue(this.page.PaymentEstimatorLink.isDisplayed(),msgOptions,'Assert PaymentEstimator Link is displayed.');
    return this;
  };

  HomeFlowBase.prototype.assert_PaymentEstimatorLink_IsNotDisplayed = function (msgOptions) {
    //this.logDebug('Assert PaymentEstimator Link is NOT displayed.');
    this.assertFalse(this.page.PaymentEstimatorLink.isDisplayed(),msgOptions,'Assert PaymentEstimator Link is NOT displayed.');
    return this;
  };

  HomeFlowBase.prototype.get_PaymentEstimatorLink_IsDisplayed = function (callback) {
    this.logDebug('Get PaymentEstimator Link Displayed state.');
    this.page.PaymentEstimatorLink.isDisplayed().then(callback);
    return this;
  };

  HomeFlowBase.prototype.assert_PaymentEstimatorLink_IsEnabled = function (msgOptions) {
    //this.logDebug('Assert PaymentEstimator Link is enabled.');
    this.assertTrue(this.page.PaymentEstimatorLink.isEnabled(),msgOptions,'Assert PaymentEstimator Link is enabled.');
    return this;
  };

  HomeFlowBase.prototype.assert_PaymentEstimatorLink_IsNotEnabled = function (msgOptions) {
    //this.logDebug('Assert PaymentEstimator Link is disabled.');
    this.assertFalse(this.page.PaymentEstimatorLink.isEnabled(),msgOptions,'Assert PaymentEstimator Link is not enabled.');
    return this;
  };

  HomeFlowBase.prototype.get_PaymentEstimatorLink_IsEnabled = function (callback) {
    this.logDebug('Get PaymentEstimator Link Enabled state.');
    this.page.PaymentEstimatorLink.isEnabled().then(callback);
    return this;
  };

  HomeFlowBase.prototype.assert_PaymentEstimatorLink_IsExists = function (msgOptions) {
    //this.logDebug('Assert PaymentEstimator Link is exists.');
    this.assertTrue(this.page.PaymentEstimatorLink.isPresent(),msgOptions,'Assert PaymentEstimator Link is exists.');
    return this;
  };

  HomeFlowBase.prototype.assert_PaymentEstimatorLink_IsNotExists = function (msgOptions) {
    //this.logDebug('Assert PaymentEstimator Link is NOT exists.');
    this.assertFalse(this.page.PaymentEstimatorLink.isPresent(),msgOptions,'Assert PaymentEstimator Link is NOT exists.');
    return this;
  };

  HomeFlowBase.prototype.get_PaymentEstimatorLink_IsExists = function (callback) {
    this.logDebug('Get if PaymentEstimator Link is exists.');
    this.page.PaymentEstimatorLink.isPresent().then(callback);
    return this;
  };



/*
switch(c.Type)
{
	case ControlTypes.Dropdown:
	  RenderDropdown(page, c);
	  break;
}
*/

module.exports = HomeFlowBase;
