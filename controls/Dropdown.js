var Control = require('./Control');

//TODO: need implement
function Dropdown(selectType, selector) {
    Control.call(this, selectType, selector);
}

Dropdown.prototype = new Control();

Dropdown.prototype.constructor = Dropdown;

Dropdown.prototype.getSelectedValue = function (callback) {
    //browser.driver.isElementPresent(by.xpath(xpath + "/option[@selected='']")).then(function (isPresent) {
    //    if (!isPresent) {
    //        callback(null);
    //    }
    //    else {
    //        var selectedItem = element(by.xpath(xpath + "/option[@selected='']"));
    //        selectedItem.getAttribute("value").then(function (value) {
    //            callback(value);
    //        });
    //    }
    //});
};

Dropdown.prototype.selectItemByValue = function (value) {
    //this.ele.click().then(function () {
    //    element(by.xpath(xpath + "/option[@value='" + value + "']")).click();
    //});
};

Dropdown.prototype.selectItemByIndex = function (index) {
    //this.ele.click().then(function () {
    //    element.all(by.xpath(xpath + "/option"))[index].click();
    //});
};

module.exports = Dropdown;
