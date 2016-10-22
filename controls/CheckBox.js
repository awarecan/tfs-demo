var Control = require('./Control');

function CheckBox(selectType, selector) {
    Control.call(this, selectType, selector);
}

CheckBox.prototype = new Control();

CheckBox.prototype.constructor = CheckBox;

CheckBox.prototype.setState = function (selected) {
    this.waitPresent();
    var self = this;
    this.getAttribute("checked").then(function (checked) {
        if (checked == null && selected)
            self.click();
        else if (checked != null && !selected)
            self.click();
    });
};

module.exports = CheckBox;
