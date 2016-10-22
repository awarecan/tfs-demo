var Control = require('./Control');

function RadioButton(selectType, selector) {
    Control.call(this, selectType, selector);
}

RadioButton.prototype = new Control();

RadioButton.prototype.constructor = RadioButton;

RadioButton.prototype.select = function () {
    this.waitPresent();
    var self = this;
    this.getAttribute("checked").then(function (checked) {
        if (checked == null)
            self.click();
    });
};

module.exports = RadioButton;
