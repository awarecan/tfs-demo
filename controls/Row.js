var Cell = require('./Cell');

function Row(row, colRepeator, columns) {
    var that = this;
    this.colRepeator = colRepeator;
    this.row = row;
    this.columns = columns;
}

Row.prototype.constructor = Row;

Row.prototype.add = function (item) {
    var index = this.cells.length;
    this.cells[index] = item;
    return index;
};

Row.prototype.insert = function (index, item) {
    this.cells[index] = item;
    return index;
};

Row.prototype.get = function (index) {
    if (isNaN(index))
        return this.row.all(by.repeater(this.colRepeator)).get(this.columns[index].Index - 1);
    else
        return this.row.all(by.repeater(this.colRepeator)).get(index);
};

Row.prototype.forEach = function (fn) {
    return this.row.all(by.repeater(this.colRepeator)).each(fn);
};

module.exports = Row;
