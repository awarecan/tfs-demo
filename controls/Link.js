var Control = require('./Control');

function Link(selectType, selector) {
    Control.call(this, selectType, selector);
}

Link.prototype = new Control();

Link.prototype.constructor = Link;

module.exports = Link;
