var Control = require('./Control');

function Button(selectType,selector) {
    Control.call(this, selectType,selector);
}

Button.prototype = new Control();

Button.prototype.constructor = Button;

module.exports = Button;
