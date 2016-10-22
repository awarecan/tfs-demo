// ------------------------------------------------------------------------------
//      This code was generated by handlebars/grunt.
//
//      Changes to this file may cause incorrect behavior and will be lost if
//      the code is regenerated.
// ------------------------------------------------------------------------------

var EstimateMonthlyPaymentPage = require('./../pages/EstimateMonthlyPaymentPage.js');
var FlowBase = require('./../flows/baseFlow.js');


function EstimateMonthlyPaymentFlowBase(checkUrl, goto) {
    checkUrl = checkUrl || false;
    goto = goto || false;
    this.page = new EstimateMonthlyPaymentPage();
    FlowBase.call(this, checkUrl, this.page.pageUrl, goto);
};

EstimateMonthlyPaymentFlowBase.prototype = new FlowBase();

EstimateMonthlyPaymentFlowBase.prototype.constructor = EstimateMonthlyPaymentFlowBase;



  // Control functions for ZipCodeTextBox




  EstimateMonthlyPaymentFlowBase.prototype.getValue_ZipCodeTextBox = function (callback) {
    this.logDebug('Get ZipCode TextBox value');
    this.page.ZipCodeTextBox.getValue().then(callback);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.setValue_ZipCodeTextBox = function (value) {
    this.logDebug('Set ZipCode TextBox value as: ' + value);
    this.page.ZipCodeTextBox.setValue(value);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.addValue_ZipCodeTextBox = function (value) {
    this.logDebug('Add ZipCode TextBox value: ' + value);
    this.page.ZipCodeTextBox.addValue(value);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.clear_ZipCodeTextBox = function() {
    this.logDebug('Clear ZipCode TextBox.');
    this.page.ZipCodeTextBox.clear();
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_ZipCodeTextBox_TextEqual = function (expectValue,msgOptions) {
    //this.logDebug('Assert ZipCode TextBox Value Equals:' + expectValue);
    this.assertAreEqual(this.page.ZipCodeTextBox.getValue(), expectValue,msgOptions,'Assert ZipCode TextBox Text Equals: ' + expectValue);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_ZipCodeTextBox_TextNotEqual = function (expectValue,msgOptions) {
    //this.logDebug('Assert ZipCode TextBox Value Not Equals:'+expectValue);
    this.assertAreNotEqual(this.page.ZipCodeTextBox.getValue(), expectValue,msgOptions,'Assert ZipCode TextBox Text Not Equals: '+expectValue);
    return this;
  };

  // Assert functions for ZipCodeTextBox
  EstimateMonthlyPaymentFlowBase.prototype.assert_ZipCodeTextBox_ContainText = function (text,msgOptions) {
    //this.logDebug('Assert ZipCode TextBox contains text: ' + text);
    this.assertIsContain(this.page.ZipCodeTextBox.getText(), text,msgOptions,'Assert ZipCode TextBox contains text: ' + text);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_ZipCodeTextBox_NotContainText = function (text,msgOptions) {
    //this.logDebug('Assert ZipCode TextBox does not contain text: ' + text);
    this.assertIsNotContain(this.page.ZipCodeTextBox.getText(), text,msgOptions,'Assert ZipCode TextBox does not contain text: ' + text);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_ZipCodeTextBox_TextMatchPattern = function (pattern,msgOptions) {
    //this.logDebug('Assert ZipCode TextBox text match pattern: ' + pattern);
    this.assertIsMatchPattern(this.page.ZipCodeTextBox.getText(), pattern, msgOptions, 'Assert ZipCode TextBox text match pattern: ' + pattern);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_ZipCodeTextBox_Attribute_ContainText = function (attribute, text,msgOptions) {
    //this.logDebug('Assert ZipCode TextBox attribute[' + attribute + '] contains text: ' + text);
    this.assertIsContain(this.page.ZipCodeTextBox.getAttribute(attribute), text,msgOptions,'Assert ZipCode TextBox attribute[' + attribute + '] contains text: ' + text);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_ZipCodeTextBox_Attribute_NotContainText = function (attribute,text,msgOptions) {
    //this.logDebug('Assert ZipCode TextBox attribute[' + attribute + '] does not contain text: ' + text);
    this.assertIsNotContain(this.page.ZipCodeTextBox.getAttribute(attribute), text,msgOptions,'Assert ZipCode TextBox attribute[' + attribute + '] does not contain text: ' + text);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_ZipCodeTextBox_Attribute_MatchPattern = function (attribute,pattern,msgOptions) {
    //this.logDebug('Assert ZipCode TextBox attribute[' + attribute + '] match pattern: ' + pattern);
    this.assertIsMatchPattern(this.page.ZipCodeTextBox.getAttribute(attribute), pattern,msgOptions,'Assert ZipCode TextBox attribute[' + attribute + '] match pattern: ' + pattern);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_ZipCodeTextBox_IsDisplayed = function (msgOptions) {
    //this.logDebug('Assert ZipCode TextBox is displayed.');
    this.assertTrue(this.page.ZipCodeTextBox.isDisplayed(),msgOptions,'Assert ZipCode TextBox is displayed.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_ZipCodeTextBox_IsNotDisplayed = function (msgOptions) {
    //this.logDebug('Assert ZipCode TextBox is NOT displayed.');
    this.assertFalse(this.page.ZipCodeTextBox.isDisplayed(),msgOptions,'Assert ZipCode TextBox is NOT displayed.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.get_ZipCodeTextBox_IsDisplayed = function (callback) {
    this.logDebug('Get ZipCode TextBox Displayed state.');
    this.page.ZipCodeTextBox.isDisplayed().then(callback);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_ZipCodeTextBox_IsEnabled = function (msgOptions) {
    //this.logDebug('Assert ZipCode TextBox is enabled.');
    this.assertTrue(this.page.ZipCodeTextBox.isEnabled(),msgOptions,'Assert ZipCode TextBox is enabled.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_ZipCodeTextBox_IsNotEnabled = function (msgOptions) {
    //this.logDebug('Assert ZipCode TextBox is disabled.');
    this.assertFalse(this.page.ZipCodeTextBox.isEnabled(),msgOptions,'Assert ZipCode TextBox is not enabled.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.get_ZipCodeTextBox_IsEnabled = function (callback) {
    this.logDebug('Get ZipCode TextBox Enabled state.');
    this.page.ZipCodeTextBox.isEnabled().then(callback);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_ZipCodeTextBox_IsExists = function (msgOptions) {
    //this.logDebug('Assert ZipCode TextBox is exists.');
    this.assertTrue(this.page.ZipCodeTextBox.isPresent(),msgOptions,'Assert ZipCode TextBox is exists.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_ZipCodeTextBox_IsNotExists = function (msgOptions) {
    //this.logDebug('Assert ZipCode TextBox is NOT exists.');
    this.assertFalse(this.page.ZipCodeTextBox.isPresent(),msgOptions,'Assert ZipCode TextBox is NOT exists.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.get_ZipCodeTextBox_IsExists = function (callback) {
    this.logDebug('Get if ZipCode TextBox is exists.');
    this.page.ZipCodeTextBox.isPresent().then(callback);
    return this;
  };


  // Navigation for RX_HYBRIDButton
  EstimateMonthlyPaymentFlowBase.prototype.click_RX_HYBRIDButton_NavigateTo_BuyFlow = function () {
        var that = this;
      var BuyFlow = require('./../flows/BuyFlow.js');
      this.takeScreenForLog(function(msg){
      that.logDebug('Click RX_HYBRID Button then navigate to BuyFlow. '+msg);
    });
    this.page.RX_HYBRIDButton.click();
    return new BuyFlow(true, false);
  };

  // Control functions for RX_HYBRIDButton
  EstimateMonthlyPaymentFlowBase.prototype.click_RX_HYBRIDButton = function () {
        var that = this;
      this.takeScreenForLog(function(msg){
      that.logDebug('Click RX_HYBRID Button. '+msg);
    });
    this.page.RX_HYBRIDButton.click();
    return this;
  };





  // Assert functions for RX_HYBRIDButton
  EstimateMonthlyPaymentFlowBase.prototype.assert_RX_HYBRIDButton_ContainText = function (text,msgOptions) {
    //this.logDebug('Assert RX_HYBRID Button contains text: ' + text);
    this.assertIsContain(this.page.RX_HYBRIDButton.getText(), text,msgOptions,'Assert RX_HYBRID Button contains text: ' + text);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_RX_HYBRIDButton_NotContainText = function (text,msgOptions) {
    //this.logDebug('Assert RX_HYBRID Button does not contain text: ' + text);
    this.assertIsNotContain(this.page.RX_HYBRIDButton.getText(), text,msgOptions,'Assert RX_HYBRID Button does not contain text: ' + text);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_RX_HYBRIDButton_TextMatchPattern = function (pattern,msgOptions) {
    //this.logDebug('Assert RX_HYBRID Button text match pattern: ' + pattern);
    this.assertIsMatchPattern(this.page.RX_HYBRIDButton.getText(), pattern, msgOptions, 'Assert RX_HYBRID Button text match pattern: ' + pattern);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_RX_HYBRIDButton_Attribute_ContainText = function (attribute, text,msgOptions) {
    //this.logDebug('Assert RX_HYBRID Button attribute[' + attribute + '] contains text: ' + text);
    this.assertIsContain(this.page.RX_HYBRIDButton.getAttribute(attribute), text,msgOptions,'Assert RX_HYBRID Button attribute[' + attribute + '] contains text: ' + text);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_RX_HYBRIDButton_Attribute_NotContainText = function (attribute,text,msgOptions) {
    //this.logDebug('Assert RX_HYBRID Button attribute[' + attribute + '] does not contain text: ' + text);
    this.assertIsNotContain(this.page.RX_HYBRIDButton.getAttribute(attribute), text,msgOptions,'Assert RX_HYBRID Button attribute[' + attribute + '] does not contain text: ' + text);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_RX_HYBRIDButton_Attribute_MatchPattern = function (attribute,pattern,msgOptions) {
    //this.logDebug('Assert RX_HYBRID Button attribute[' + attribute + '] match pattern: ' + pattern);
    this.assertIsMatchPattern(this.page.RX_HYBRIDButton.getAttribute(attribute), pattern,msgOptions,'Assert RX_HYBRID Button attribute[' + attribute + '] match pattern: ' + pattern);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_RX_HYBRIDButton_IsDisplayed = function (msgOptions) {
    //this.logDebug('Assert RX_HYBRID Button is displayed.');
    this.assertTrue(this.page.RX_HYBRIDButton.isDisplayed(),msgOptions,'Assert RX_HYBRID Button is displayed.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_RX_HYBRIDButton_IsNotDisplayed = function (msgOptions) {
    //this.logDebug('Assert RX_HYBRID Button is NOT displayed.');
    this.assertFalse(this.page.RX_HYBRIDButton.isDisplayed(),msgOptions,'Assert RX_HYBRID Button is NOT displayed.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.get_RX_HYBRIDButton_IsDisplayed = function (callback) {
    this.logDebug('Get RX_HYBRID Button Displayed state.');
    this.page.RX_HYBRIDButton.isDisplayed().then(callback);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_RX_HYBRIDButton_IsEnabled = function (msgOptions) {
    //this.logDebug('Assert RX_HYBRID Button is enabled.');
    this.assertTrue(this.page.RX_HYBRIDButton.isEnabled(),msgOptions,'Assert RX_HYBRID Button is enabled.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_RX_HYBRIDButton_IsNotEnabled = function (msgOptions) {
    //this.logDebug('Assert RX_HYBRID Button is disabled.');
    this.assertFalse(this.page.RX_HYBRIDButton.isEnabled(),msgOptions,'Assert RX_HYBRID Button is not enabled.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.get_RX_HYBRIDButton_IsEnabled = function (callback) {
    this.logDebug('Get RX_HYBRID Button Enabled state.');
    this.page.RX_HYBRIDButton.isEnabled().then(callback);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_RX_HYBRIDButton_IsExists = function (msgOptions) {
    //this.logDebug('Assert RX_HYBRID Button is exists.');
    this.assertTrue(this.page.RX_HYBRIDButton.isPresent(),msgOptions,'Assert RX_HYBRID Button is exists.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_RX_HYBRIDButton_IsNotExists = function (msgOptions) {
    //this.logDebug('Assert RX_HYBRID Button is NOT exists.');
    this.assertFalse(this.page.RX_HYBRIDButton.isPresent(),msgOptions,'Assert RX_HYBRID Button is NOT exists.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.get_RX_HYBRIDButton_IsExists = function (callback) {
    this.logDebug('Get if RX_HYBRID Button is exists.');
    this.page.RX_HYBRIDButton.isPresent().then(callback);
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

module.exports = EstimateMonthlyPaymentFlowBase;

