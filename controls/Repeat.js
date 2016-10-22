var Control = require('./Control');

function Repeat(rowRepeater,columns) {
    this.rowRepeater = rowRepeater;
    //this.columns = columns.sort(function(a,b){
    //    return a.Index - b.Index;
    //});
    this.columns=columns;
    this.elements = element.all(by.repeater(rowRepeater));
}

Repeat.prototype.constructor = Repeat;

Repeat.prototype.getText = function (rowIndex,columnIndex) {
    return this.getElement(rowIndex,columnIndex).getText();
};

Repeat.prototype.click = function (rowIndex,columnIndex) {
    return this.getElement(rowIndex,columnIndex).click();
};

Repeat.prototype.filter = function (filterFn) {
    return this.elements.filter(filterFn);
};
Repeat.prototype.each=function(forEachFn){
    this.elements.each(forEachFn);
};
Repeat.prototype.getElement = function(rowIndex,columnIndex) {
    var column = this.columns[columnIndex];
    return this.elements.get(rowIndex).element(new Control(column.SelectType ,column.Selector).locator);
};
module.exports = Repeat;
