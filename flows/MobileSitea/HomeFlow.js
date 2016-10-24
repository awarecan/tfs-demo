var HomeFlowBase = require('./HomeFlowBase.js');
var that;
function HomeFlow(checkUrl, goto) {
    HomeFlowBase.call(this, checkUrl, goto);
    that = this;
}

HomeFlow.prototype = new HomeFlowBase();

HomeFlow.prototype.constructor = HomeFlow;

HomeFlow.prototype.start = function () {

};

module.exports = HomeFlow;


  // Navigation to EstimateMonthlyPaymentFlow
  HomeFlow.prototype.navigateTo_EstimateMonthlyPaymentFlow = function () {
      return this.click_EstimateMonthlyPaymentLink_NavigateTo_EstimateMonthlyPaymentFlow();
      
  };

