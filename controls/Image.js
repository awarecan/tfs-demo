var Control = require('./Control');

function Image(selectType, selector) {
    Control.call(this, selectType, selector);
}

Image.prototype = new Control();

Image.prototype.constructor = Image;

Image.prototype.getSrc = function () {
    this.waitPresent();
    return this.getAttribute("src");
};

module.exports = Image;
