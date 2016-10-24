var EstimateMonthlyPaymentFlowBase = require('./EstimateMonthlyPaymentFlowBase.js');
var that;
function EstimateMonthlyPaymentFlow(checkUrl, goto) {
    EstimateMonthlyPaymentFlowBase.call(this, checkUrl, goto);
    that = this;
}

EstimateMonthlyPaymentFlow.prototype = new EstimateMonthlyPaymentFlowBase();

EstimateMonthlyPaymentFlow.prototype.constructor = EstimateMonthlyPaymentFlow;

EstimateMonthlyPaymentFlow.prototype.start = function () {

};

module.exports = EstimateMonthlyPaymentFlow;

  // Navigation for RX_HYBRIDButton
  EstimateMonthlyPaymentFlowBase.prototype.input_ZipCode_And_NavigateTo_BuyFlow = function (zipcode,cartype) {
      return this.setValue_ZipCodeTextBox(zipcode)
      .click_RX_HYBRIDButton_NavigateTo_BuyFlow();
      
  };

