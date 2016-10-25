var SelectTrimFlowBase = require('./SelectTrimFlowBase.js');
var that;
function SelectTrimFlow(checkUrl, goto) {
    SelectTrimFlowBase.call(this, checkUrl, goto);
    that = this;
}

SelectTrimFlow.prototype = new SelectTrimFlowBase();

SelectTrimFlow.prototype.constructor = SelectTrimFlow;

SelectTrimFlow.prototype.start = function () {

};

module.exports = SelectTrimFlow;