var Row = require('./Row');

function Table(rowRepeater, colRepeater, columns) {
    this.rowRepeater = rowRepeater;
    this.colRepeater = colRepeater;
    this.columns = columns;

    //columns.forEach(function (col) {
    //  this.columns[this.key] = new (col.Type)(col.SelectorType, col.Selector);
    //});
    //
    //Object.defineProperty(this, 'length', {
    //  get: function() {
    //    return this.rows.length;
    //  }
    //});

}

Table.prototype.constructor = Table;

Table.prototype.add = function (item) {
    var index = this.rows.length;
    this.rows[index] = item;
    return index;
};

Table.prototype.insert = function (index, item) {
    this.rows[index] = item;
    return index;
};

Table.prototype.get = function (index) {
    return this.rows[index];
};

//loop all rows
Table.prototype.forEach = function (fn) {
    var that = this;
    return element.all(by.repeater(this.rowRepeater)).each(function (ele, idx) {
        var row = new Row(ele, that.colRepeater, that.columns);
        fn(row, idx);
    });
};

//row count
Table.prototype.rowCount = function (fn) {
    return element.all(by.repeater(this.rowRepeater)).count();
};

//get whole table or specific column values as an Array
Table.prototype.getValue = function (colName) {
    var that = this;
    return element.all(by.repeater(this.rowRepeater)).map(function (ele, index) {
        var row = new Row(ele, that.colRepeater, that.columns);
        if (colName) {
            return row.get(colName).getText();
        }
        //} else {
        //    row.forEach(function (col) {
        //
        //    })
        //    return
        //}
    });
};

module.exports = Table;
