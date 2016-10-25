// ------------------------------------------------------------------------------
//      This code was generated by handlebars/grunt.
//
//      Changes to this file may cause incorrect behavior and will be lost if
//      the code is regenerated.
// ------------------------------------------------------------------------------

var controls = require('./../controls/controls.js');
var utilities = require('./../utils/utilities.js');
var pagedata = utilities.readJsonFile(__dirname + '/../pages/HomePage.json');

function HomePage(){
      this.pageUrl = '/pub/w';
      this.PaymentEstimatorLink = new controls.Link(pagedata.Controls.PaymentEstimator.SelectType, pagedata.Controls.PaymentEstimator.Selector);
};

module.exports = HomePage;