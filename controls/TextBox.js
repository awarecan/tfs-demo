var Control = require('./Control');

function TextBox(selectType,selector) {
    Control.call(this, selectType,selector);
}
TextBox.prototype = new Control();

TextBox.prototype.constructor = TextBox;

TextBox.prototype.getValue = function () {
    this.waitPresent();
    return this.ele.getAttribute("value");
};

TextBox.prototype.addValue = function (value) {
    this.waitPresent(true);
    return this.ele.sendKeys(value);
};

TextBox.prototype.setValue = function (value) {
    this.waitPresent(true);
    return this.ele.clear().sendKeys(value);
};

module.exports = TextBox;
