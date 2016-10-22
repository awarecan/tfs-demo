var Control = require('./Control');

function Label(selectType, selector) {
    Control.call(this, selectType, selector);
}

Label.prototype = new Control();

Label.prototype.constructor = Label;

module.exports = Label;
