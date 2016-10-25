// ------------------------------------------------------------------------------
//      This code was generated by handlebars/grunt.
//
//      Changes to this file may cause incorrect behavior and will be lost if
//      the code is regenerated.
// ------------------------------------------------------------------------------

var controls = require('./../controls/controls.js');
var utilities = require('./../utils/utilities.js');
var pagedata = utilities.readJsonFile(__dirname + '/../pages/DetailPage.json');

function DetailPage(){
      this.pageUrl = '/pub/w/estimate-payment/3';
      this.BuyLink = new controls.Link(pagedata.Controls.Buy.SelectType, pagedata.Controls.Buy.Selector);
      this.LeaseLink = new controls.Link(pagedata.Controls.Lease.SelectType, pagedata.Controls.Lease.Selector);
      this.Term60MonthLabel = new controls.Label(pagedata.Controls.Term60Month.SelectType, pagedata.Controls.Term60Month.Selector);
      this.Term60DueLabel = new controls.Label(pagedata.Controls.Term60Due.SelectType, pagedata.Controls.Term60Due.Selector);
      this.NavbarToggleButton = new controls.Button(pagedata.Controls.NavbarToggle.SelectType, pagedata.Controls.NavbarToggle.Selector);
      this.MenuLargePaymentEstimatorButton = new controls.Button(pagedata.Controls.MenuLargePaymentEstimator.SelectType, pagedata.Controls.MenuLargePaymentEstimator.Selector);
      this.MenuSmallPaymentEstimatorButton = new controls.Button(pagedata.Controls.MenuSmallPaymentEstimator.SelectType, pagedata.Controls.MenuSmallPaymentEstimator.Selector);
      this.LoadingLabel = new controls.Label(pagedata.Controls.Loading.SelectType, pagedata.Controls.Loading.Selector);
};

module.exports = DetailPage;
