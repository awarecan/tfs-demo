function Cell(controlType, selectType, selector) {
    var Control = require('./' + controlType);
    this.control = new Control(selectType, selector);
}

Cell.prototype.constructor = Cell;

Cell.prototype.getText = function () {
    this.waitPresent();
    return this.control.getText();
};

Cell.prototype.isPresent = function () {
    return this.control.isPresent();
};

Cell.prototype.click = function () {
    this.waitPresent();
    return this.control.click();
};

module.exports = Cell;
