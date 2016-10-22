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