// ------------------------------------------------------------------------------
//      This code was generated by handlebars/grunt.
//
//      Changes to this file may cause incorrect behavior and will be lost if
//      the code is regenerated.
// ------------------------------------------------------------------------------

var controls = require('./../controls/controls.js');
var utilities = require('./../utils/utilities.js');
var pagedata = utilities.readJsonFile(__dirname + '/../pages/EstimateMonthlyPaymentPage.json');

function EstimateMonthlyPaymentPage(){
      this.pageUrl = '/pub/w/estimate-payment/1';
      this.ZipCodeTextBox = new controls.TextBox(pagedata.Controls.ZipCode.SelectType, pagedata.Controls.ZipCode.Selector);
      this.StartButton = new controls.Button(pagedata.Controls.Start.SelectType, pagedata.Controls.Start.Selector);
      this.HybirdsButton = new controls.Button(pagedata.Controls.Hybirds.SelectType, pagedata.Controls.Hybirds.Selector);
      this.RX_HYBRIDButton = new controls.Button(pagedata.Controls.RX_HYBRID.SelectType, pagedata.Controls.RX_HYBRID.Selector);
      this.NavbarToggleButton = new controls.Button(pagedata.Controls.NavbarToggle.SelectType, pagedata.Controls.NavbarToggle.Selector);
      this.MenuLargePaymentEstimatorButton = new controls.Button(pagedata.Controls.MenuLargePaymentEstimator.SelectType, pagedata.Controls.MenuLargePaymentEstimator.Selector);
      this.MenuSmallPaymentEstimatorButton = new controls.Button(pagedata.Controls.MenuSmallPaymentEstimator.SelectType, pagedata.Controls.MenuSmallPaymentEstimator.Selector);
      this.LoadingLabel = new controls.Label(pagedata.Controls.Loading.SelectType, pagedata.Controls.Loading.Selector);
};

module.exports = EstimateMonthlyPaymentPage;
