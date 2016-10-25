var DetailFlowBase = require('./DetailFlowBase.js');
var that;
function DetailFlow(checkUrl, goto) {
    DetailFlowBase.call(this, checkUrl, goto);
    that = this;
}

DetailFlow.prototype = new DetailFlowBase();

DetailFlow.prototype.constructor = DetailFlow;

DetailFlow.prototype.start = function () {

};

module.exports = DetailFlow;