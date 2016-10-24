var BuyFlowBase = require('./BuyFlowBase.js');
var that;
function BuyFlow(checkUrl, goto) {
    BuyFlowBase.call(this, checkUrl, goto);
    that = this;
}

BuyFlow.prototype = new BuyFlowBase();

BuyFlow.prototype.constructor = BuyFlow;

BuyFlow.prototype.start = function () {

};

module.exports = BuyFlow;