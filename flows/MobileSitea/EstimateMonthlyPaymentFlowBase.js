// ------------------------------------------------------------------------------
//      This code was generated by handlebars/grunt.
//
//      Changes to this file may cause incorrect behavior and will be lost if
//      the code is regenerated.
// ------------------------------------------------------------------------------

var EstimateMonthlyPaymentPage = require('./../../pages/MobileSitea/EstimateMonthlyPaymentPage.js');
var FlowBase = require('./../../flows/baseFlow.js');


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



  // Control functions for StartBtnButton
  EstimateMonthlyPaymentFlowBase.prototype.click_StartBtnButton = function () {
        var that = this;
      this.takeScreenForLog(function(msg){
      that.logDebug('Click StartBtn Button. '+msg);
    });
    this.page.StartBtnButton.click();
    return this;
  };





  // Assert functions for StartBtnButton
  EstimateMonthlyPaymentFlowBase.prototype.assert_StartBtnButton_ContainText = function (text,msgOptions) {
    //this.logDebug('Assert StartBtn Button contains text: ' + text);
    this.assertIsContain(this.page.StartBtnButton.getText(), text,msgOptions,'Assert StartBtn Button contains text: ' + text);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_StartBtnButton_NotContainText = function (text,msgOptions) {
    //this.logDebug('Assert StartBtn Button does not contain text: ' + text);
    this.assertIsNotContain(this.page.StartBtnButton.getText(), text,msgOptions,'Assert StartBtn Button does not contain text: ' + text);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_StartBtnButton_TextMatchPattern = function (pattern,msgOptions) {
    //this.logDebug('Assert StartBtn Button text match pattern: ' + pattern);
    this.assertIsMatchPattern(this.page.StartBtnButton.getText(), pattern, msgOptions, 'Assert StartBtn Button text match pattern: ' + pattern);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_StartBtnButton_Attribute_ContainText = function (attribute, text,msgOptions) {
    //this.logDebug('Assert StartBtn Button attribute[' + attribute + '] contains text: ' + text);
    this.assertIsContain(this.page.StartBtnButton.getAttribute(attribute), text,msgOptions,'Assert StartBtn Button attribute[' + attribute + '] contains text: ' + text);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_StartBtnButton_Attribute_NotContainText = function (attribute,text,msgOptions) {
    //this.logDebug('Assert StartBtn Button attribute[' + attribute + '] does not contain text: ' + text);
    this.assertIsNotContain(this.page.StartBtnButton.getAttribute(attribute), text,msgOptions,'Assert StartBtn Button attribute[' + attribute + '] does not contain text: ' + text);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_StartBtnButton_Attribute_MatchPattern = function (attribute,pattern,msgOptions) {
    //this.logDebug('Assert StartBtn Button attribute[' + attribute + '] match pattern: ' + pattern);
    this.assertIsMatchPattern(this.page.StartBtnButton.getAttribute(attribute), pattern,msgOptions,'Assert StartBtn Button attribute[' + attribute + '] match pattern: ' + pattern);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_StartBtnButton_IsDisplayed = function (msgOptions) {
    //this.logDebug('Assert StartBtn Button is displayed.');
    this.assertTrue(this.page.StartBtnButton.isDisplayed(),msgOptions,'Assert StartBtn Button is displayed.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_StartBtnButton_IsNotDisplayed = function (msgOptions) {
    //this.logDebug('Assert StartBtn Button is NOT displayed.');
    this.assertFalse(this.page.StartBtnButton.isDisplayed(),msgOptions,'Assert StartBtn Button is NOT displayed.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.get_StartBtnButton_IsDisplayed = function (callback) {
    this.logDebug('Get StartBtn Button Displayed state.');
    this.page.StartBtnButton.isDisplayed().then(callback);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_StartBtnButton_IsEnabled = function (msgOptions) {
    //this.logDebug('Assert StartBtn Button is enabled.');
    this.assertTrue(this.page.StartBtnButton.isEnabled(),msgOptions,'Assert StartBtn Button is enabled.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_StartBtnButton_IsNotEnabled = function (msgOptions) {
    //this.logDebug('Assert StartBtn Button is disabled.');
    this.assertFalse(this.page.StartBtnButton.isEnabled(),msgOptions,'Assert StartBtn Button is not enabled.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.get_StartBtnButton_IsEnabled = function (callback) {
    this.logDebug('Get StartBtn Button Enabled state.');
    this.page.StartBtnButton.isEnabled().then(callback);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_StartBtnButton_IsExists = function (msgOptions) {
    //this.logDebug('Assert StartBtn Button is exists.');
    this.assertTrue(this.page.StartBtnButton.isPresent(),msgOptions,'Assert StartBtn Button is exists.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_StartBtnButton_IsNotExists = function (msgOptions) {
    //this.logDebug('Assert StartBtn Button is NOT exists.');
    this.assertFalse(this.page.StartBtnButton.isPresent(),msgOptions,'Assert StartBtn Button is NOT exists.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.get_StartBtnButton_IsExists = function (callback) {
    this.logDebug('Get if StartBtn Button is exists.');
    this.page.StartBtnButton.isPresent().then(callback);
    return this;
  };



  // Control functions for Group_HYBRIDLabel

  EstimateMonthlyPaymentFlowBase.prototype.getText_Group_HYBRIDLabel = function (callback) {
    this.logDebug('Get Group_HYBRID Label text');
    this.page.Group_HYBRIDLabel.getText().then(callback);
    return this;
  };
  EstimateMonthlyPaymentFlowBase.prototype.click_Group_HYBRIDLabel = function (callback) {
      var that = this;
      this.takeScreenForLog(function(msg){
      that.logDebug('Click Group_HYBRID Label. '+msg);
    });
    this.page.Group_HYBRIDLabel.click();
    return this;
  };




  // Assert functions for Group_HYBRIDLabel
  EstimateMonthlyPaymentFlowBase.prototype.assert_Group_HYBRIDLabel_ContainText = function (text,msgOptions) {
    //this.logDebug('Assert Group_HYBRID Label contains text: ' + text);
    this.assertIsContain(this.page.Group_HYBRIDLabel.getText(), text,msgOptions,'Assert Group_HYBRID Label contains text: ' + text);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_Group_HYBRIDLabel_NotContainText = function (text,msgOptions) {
    //this.logDebug('Assert Group_HYBRID Label does not contain text: ' + text);
    this.assertIsNotContain(this.page.Group_HYBRIDLabel.getText(), text,msgOptions,'Assert Group_HYBRID Label does not contain text: ' + text);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_Group_HYBRIDLabel_TextMatchPattern = function (pattern,msgOptions) {
    //this.logDebug('Assert Group_HYBRID Label text match pattern: ' + pattern);
    this.assertIsMatchPattern(this.page.Group_HYBRIDLabel.getText(), pattern, msgOptions, 'Assert Group_HYBRID Label text match pattern: ' + pattern);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_Group_HYBRIDLabel_Attribute_ContainText = function (attribute, text,msgOptions) {
    //this.logDebug('Assert Group_HYBRID Label attribute[' + attribute + '] contains text: ' + text);
    this.assertIsContain(this.page.Group_HYBRIDLabel.getAttribute(attribute), text,msgOptions,'Assert Group_HYBRID Label attribute[' + attribute + '] contains text: ' + text);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_Group_HYBRIDLabel_Attribute_NotContainText = function (attribute,text,msgOptions) {
    //this.logDebug('Assert Group_HYBRID Label attribute[' + attribute + '] does not contain text: ' + text);
    this.assertIsNotContain(this.page.Group_HYBRIDLabel.getAttribute(attribute), text,msgOptions,'Assert Group_HYBRID Label attribute[' + attribute + '] does not contain text: ' + text);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_Group_HYBRIDLabel_Attribute_MatchPattern = function (attribute,pattern,msgOptions) {
    //this.logDebug('Assert Group_HYBRID Label attribute[' + attribute + '] match pattern: ' + pattern);
    this.assertIsMatchPattern(this.page.Group_HYBRIDLabel.getAttribute(attribute), pattern,msgOptions,'Assert Group_HYBRID Label attribute[' + attribute + '] match pattern: ' + pattern);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_Group_HYBRIDLabel_IsDisplayed = function (msgOptions) {
    //this.logDebug('Assert Group_HYBRID Label is displayed.');
    this.assertTrue(this.page.Group_HYBRIDLabel.isDisplayed(),msgOptions,'Assert Group_HYBRID Label is displayed.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_Group_HYBRIDLabel_IsNotDisplayed = function (msgOptions) {
    //this.logDebug('Assert Group_HYBRID Label is NOT displayed.');
    this.assertFalse(this.page.Group_HYBRIDLabel.isDisplayed(),msgOptions,'Assert Group_HYBRID Label is NOT displayed.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.get_Group_HYBRIDLabel_IsDisplayed = function (callback) {
    this.logDebug('Get Group_HYBRID Label Displayed state.');
    this.page.Group_HYBRIDLabel.isDisplayed().then(callback);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_Group_HYBRIDLabel_IsEnabled = function (msgOptions) {
    //this.logDebug('Assert Group_HYBRID Label is enabled.');
    this.assertTrue(this.page.Group_HYBRIDLabel.isEnabled(),msgOptions,'Assert Group_HYBRID Label is enabled.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_Group_HYBRIDLabel_IsNotEnabled = function (msgOptions) {
    //this.logDebug('Assert Group_HYBRID Label is disabled.');
    this.assertFalse(this.page.Group_HYBRIDLabel.isEnabled(),msgOptions,'Assert Group_HYBRID Label is not enabled.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.get_Group_HYBRIDLabel_IsEnabled = function (callback) {
    this.logDebug('Get Group_HYBRID Label Enabled state.');
    this.page.Group_HYBRIDLabel.isEnabled().then(callback);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_Group_HYBRIDLabel_IsExists = function (msgOptions) {
    //this.logDebug('Assert Group_HYBRID Label is exists.');
    this.assertTrue(this.page.Group_HYBRIDLabel.isPresent(),msgOptions,'Assert Group_HYBRID Label is exists.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_Group_HYBRIDLabel_IsNotExists = function (msgOptions) {
    //this.logDebug('Assert Group_HYBRID Label is NOT exists.');
    this.assertFalse(this.page.Group_HYBRIDLabel.isPresent(),msgOptions,'Assert Group_HYBRID Label is NOT exists.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.get_Group_HYBRIDLabel_IsExists = function (callback) {
    this.logDebug('Get if Group_HYBRID Label is exists.');
    this.page.Group_HYBRIDLabel.isPresent().then(callback);
    return this;
  };


  // Navigation for RX_HYBRIDLink
  EstimateMonthlyPaymentFlowBase.prototype.click_RX_HYBRIDLink_NavigateTo_BuyFlow = function () {
        var that = this;
      var BuyFlow = require('./../../flows/MobileSitea/BuyFlow.js');
      this.takeScreenForLog(function(msg){
      that.logDebug('Click RX_HYBRID Link then navigate to BuyFlow. '+msg);
    });
    this.page.RX_HYBRIDLink.click();
    return new BuyFlow(true, false);
  };

  // Control functions for RX_HYBRIDLink
  EstimateMonthlyPaymentFlowBase.prototype.click_RX_HYBRIDLink = function () {
      var that = this;
      this.takeScreenForLog(function(msg){
      that.logDebug('Click RX_HYBRID Link. '+msg);
    });
    this.page.RX_HYBRIDLink.click();
    return this;
  };





  // Assert functions for RX_HYBRIDLink
  EstimateMonthlyPaymentFlowBase.prototype.assert_RX_HYBRIDLink_ContainText = function (text,msgOptions) {
    //this.logDebug('Assert RX_HYBRID Link contains text: ' + text);
    this.assertIsContain(this.page.RX_HYBRIDLink.getText(), text,msgOptions,'Assert RX_HYBRID Link contains text: ' + text);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_RX_HYBRIDLink_NotContainText = function (text,msgOptions) {
    //this.logDebug('Assert RX_HYBRID Link does not contain text: ' + text);
    this.assertIsNotContain(this.page.RX_HYBRIDLink.getText(), text,msgOptions,'Assert RX_HYBRID Link does not contain text: ' + text);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_RX_HYBRIDLink_TextMatchPattern = function (pattern,msgOptions) {
    //this.logDebug('Assert RX_HYBRID Link text match pattern: ' + pattern);
    this.assertIsMatchPattern(this.page.RX_HYBRIDLink.getText(), pattern, msgOptions, 'Assert RX_HYBRID Link text match pattern: ' + pattern);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_RX_HYBRIDLink_Attribute_ContainText = function (attribute, text,msgOptions) {
    //this.logDebug('Assert RX_HYBRID Link attribute[' + attribute + '] contains text: ' + text);
    this.assertIsContain(this.page.RX_HYBRIDLink.getAttribute(attribute), text,msgOptions,'Assert RX_HYBRID Link attribute[' + attribute + '] contains text: ' + text);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_RX_HYBRIDLink_Attribute_NotContainText = function (attribute,text,msgOptions) {
    //this.logDebug('Assert RX_HYBRID Link attribute[' + attribute + '] does not contain text: ' + text);
    this.assertIsNotContain(this.page.RX_HYBRIDLink.getAttribute(attribute), text,msgOptions,'Assert RX_HYBRID Link attribute[' + attribute + '] does not contain text: ' + text);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_RX_HYBRIDLink_Attribute_MatchPattern = function (attribute,pattern,msgOptions) {
    //this.logDebug('Assert RX_HYBRID Link attribute[' + attribute + '] match pattern: ' + pattern);
    this.assertIsMatchPattern(this.page.RX_HYBRIDLink.getAttribute(attribute), pattern,msgOptions,'Assert RX_HYBRID Link attribute[' + attribute + '] match pattern: ' + pattern);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_RX_HYBRIDLink_IsDisplayed = function (msgOptions) {
    //this.logDebug('Assert RX_HYBRID Link is displayed.');
    this.assertTrue(this.page.RX_HYBRIDLink.isDisplayed(),msgOptions,'Assert RX_HYBRID Link is displayed.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_RX_HYBRIDLink_IsNotDisplayed = function (msgOptions) {
    //this.logDebug('Assert RX_HYBRID Link is NOT displayed.');
    this.assertFalse(this.page.RX_HYBRIDLink.isDisplayed(),msgOptions,'Assert RX_HYBRID Link is NOT displayed.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.get_RX_HYBRIDLink_IsDisplayed = function (callback) {
    this.logDebug('Get RX_HYBRID Link Displayed state.');
    this.page.RX_HYBRIDLink.isDisplayed().then(callback);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_RX_HYBRIDLink_IsEnabled = function (msgOptions) {
    //this.logDebug('Assert RX_HYBRID Link is enabled.');
    this.assertTrue(this.page.RX_HYBRIDLink.isEnabled(),msgOptions,'Assert RX_HYBRID Link is enabled.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_RX_HYBRIDLink_IsNotEnabled = function (msgOptions) {
    //this.logDebug('Assert RX_HYBRID Link is disabled.');
    this.assertFalse(this.page.RX_HYBRIDLink.isEnabled(),msgOptions,'Assert RX_HYBRID Link is not enabled.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.get_RX_HYBRIDLink_IsEnabled = function (callback) {
    this.logDebug('Get RX_HYBRID Link Enabled state.');
    this.page.RX_HYBRIDLink.isEnabled().then(callback);
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_RX_HYBRIDLink_IsExists = function (msgOptions) {
    //this.logDebug('Assert RX_HYBRID Link is exists.');
    this.assertTrue(this.page.RX_HYBRIDLink.isPresent(),msgOptions,'Assert RX_HYBRID Link is exists.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.assert_RX_HYBRIDLink_IsNotExists = function (msgOptions) {
    //this.logDebug('Assert RX_HYBRID Link is NOT exists.');
    this.assertFalse(this.page.RX_HYBRIDLink.isPresent(),msgOptions,'Assert RX_HYBRID Link is NOT exists.');
    return this;
  };

  EstimateMonthlyPaymentFlowBase.prototype.get_RX_HYBRIDLink_IsExists = function (callback) {
    this.logDebug('Get if RX_HYBRID Link is exists.');
    this.page.RX_HYBRIDLink.isPresent().then(callback);
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
