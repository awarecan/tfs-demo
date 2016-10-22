var Configs = require('./common/configs');
var logUtil = require('./utils/logUtil');
var emailUtil = require('./utils/emailUtil');

// Assign test environment, and test run configuration
var cfg = new Configs('local');
var environmentConfig = cfg.environmentConfig;
var appConfig = cfg.appConfig;
var runConfig = cfg.runConfig;
var reportConfig = cfg.reportConfig;


// A reference configuration file.
exports.config = {
    // ---------------------------------------------------------------------------
    // ----- How to connect to Browser Drivers -----------------------------------
    // ---------------------------------------------------------------------------
    //
    // Protractor needs to know how to connect to Drivers for the browsers
    // it is testing on. This is usually done through a Selenium Server.
    // There are four options - specify one of the following:
    //
    // 1. seleniumServerJar - to start a standalone Selenium Server locally.
    // 2. seleniumAddress - to connect to a Selenium Server which is already
    //    running.
    // 3. sauceUser/sauceKey - to use remote Selenium Servers via Sauce Labs.
    // 4. directConnect - to connect directly to the browser Drivers.
    //    This option is only available for Firefox and Chrome.

    // ---- 1. To start a standalone Selenium Server locally ---------------------
    // The location of the standalone Selenium Server jar file, relative
    // to the location of this config. If no other method of starting Selenium
    // Server is found, this will default to
    // node_modules/protractor/selenium/selenium-server...
    //seleniumServerJar: null,
    // The port to start the Selenium Server on, or null if the server should
    // find its own unused port. Ignored if seleniumServerJar is null.
    //seleniumPort: null,
    // Additional command line options to pass to selenium. For example,
    // if you need to change the browser timeout, use
    // seleniumArgs: ['-browserTimeout=60']
    // Ignored if seleniumServerJar is null.
    //seleniumArgs: [],
    // ChromeDriver location is used to help find the chromedriver binary.
    // This will be passed to the Selenium jar as the system property
    // webdriver.chrome.driver. If null, Selenium will
    // attempt to find ChromeDriver using PATH.
    //chromeDriver: './selenium/chromedriver',

    // ---- 2. To connect to a Selenium Server which is already running ----------
    // The address of a running Selenium Server. If specified, Protractor will
    // connect to an already running instance of Selenium. This usually looks like
    // seleniumAddress: 'http://localhost:4444/wd/hub'
    //seleniumAddress: environmentConfig.seleniumAddress,
    directConnect: true,

    // ---- 3. To use remote browsers via Sauce Labs -----------------------------
    // If sauceUser and sauceKey are specified, seleniumServerJar will be ignored.
    // The tests will be run remotely using Sauce Labs.
    //sauceUser: null,
    //sauceKey: null,
    // Use sauceAgent if you need customize agent for https connection to
    // saucelabs.com (i.e. your computer behind corporate proxy)
    //sauceAgent: null,
    // Use sauceSeleniumAddress if you need to customize the URL Protractor
    // uses to connect to sauce labs (for example, if you are tunneling selenium
    // traffic through a sauce connect tunnel). Default is
    // ondemand.saucelabs.com:80/wd/hub
    //sauceSeleniumAddress: null,

    // ---- 4. To connect directly to Drivers ------------------------------------
    // Boolean. If true, Protractor will connect directly to the browser Drivers
    // at the locations specified by chromeDriver and firefoxPath. Only Chrome
    // and Firefox are supported for direct connect.
    //directConnect: false,
    // Path to the firefox application binary. If null, will attempt to find
    // firefox in the default locations.
    //firefoxPath: null,

    // ---------------------------------------------------------------------------
    // ----- What tests to run ---------------------------------------------------
    // ---------------------------------------------------------------------------

    // Spec patterns are relative to the location of this config.
    specs: runConfig.TestCases,

    // Patterns to exclude.
    //exclude: [],

    // Alternatively, suites may be used. When run without a command line
    // parameter, all suites will run. If run with --suite=smoke or
    // --suite=smoke,full only the patterns matched by the specified suites will
    // run.
    //suites: {
    //  smoke: 'spec/smoketests/*.js',
    //  full: 'spec/*.js'
    //},

    // ---------------------------------------------------------------------------
    // ----- How to set up browsers ----------------------------------------------
    // ---------------------------------------------------------------------------
    //
    // Protractor can launch your tests on one or more browsers. If you are
    // testing on a single browser, use the capabilities option. If you are
    // testing on multiple browsers, use the multiCapabilities array.

    // For a list of available capabilities, see
    // https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
    //
    // In addition, you may specify count, shardTestFiles, and maxInstances.
    //capabilities: {
    //  browserName: 'chrome',
    //
    //  // Name of the process executing this capability.  Not used directly by
    //  // protractor or the browser, but instead pass directly to third parties
    //  // like SauceLabs as the name of the job running this test
    //  name: 'Unnamed Job',
    //
    //  // User defined name for the capability that will display in the results log
    //  // Defaults to the browser name
    //  logName: 'Chrome - English',
    //
    //  // Number of times to run this set of capabilities (in parallel, unless
    //  // limited by maxSessions). Default is 1.
    //  count: 1,
    //
    //  // If this is set to be true, specs will be sharded by file (i.e. all
    //  // files to be run by this set of capabilities will run in parallel).
    //  // Default is false.
    //  shardTestFiles: false,
    //
    //  // Maximum number of browser instances that can run in parallel for this
    //  // set of capabilities. This is only needed if shardTestFiles is true.
    //  // Default is 1.
    //  maxInstances: 1,
    //
    //  // Additional spec files to be run on this capability only.
    //  specs: ['spec/chromeOnlySpec.js'],
    //
    //  // Spec files to be excluded on this capability only.
    //  exclude: ['spec/doNotRunInChromeSpec.js'],
    //
    //  // Optional: override global seleniumAddress on this capability only.
    //  seleniumAddress: null
    //},

    // If you would like to run more than one instance of WebDriver on the same
    // tests, use multiCapabilities, which takes an array of capabilities.
    // If this is specified, capabilities will be ignored.
    multiCapabilities: runConfig.multiCapabilities,

    // If you need to resolve multiCapabilities asynchronously (i.e. wait for
    // server/proxy, set firefox profile, etc), you can specify a function here
    // which will return either `multiCapabilities` or a promise to
    // `multiCapabilities`.
    // If this returns a promise, it is resolved immediately after
    // `beforeLaunch` is run, and before any driver is set up.
    // If this is specified, both capabilities and multiCapabilities will be
    // ignored.
    //getMultiCapabilities: null,

    // Maximum number of total browser sessions to run. Tests are queued in
    // sequence if number of browser sessions is limited by this parameter.
    // Use a number less than 1 to denote unlimited. Default is unlimited.
    //maxSessions: -1,

    // ---------------------------------------------------------------------------
    // ----- Global test information ---------------------------------------------
    // ---------------------------------------------------------------------------
    //
    // A base URL for your application under test. Calls to protractor.get()
    // with relative paths will be prepended with this.
    baseUrl: appConfig.params.baseUrl,

    // CSS Selector for the element housing the angular app - this defaults to
    // body, but is necessary if ng-app is on a descendant of <body>.
    rootElement: 'body',

    // The timeout in milliseconds for each script run on the browser. This should
    // be longer than the maximum time your application needs to stabilize between
    // tasks.
    allScriptsTimeout: environmentConfig.allScriptsTimeout,

    // How long to wait for a page to load.
    //getPageTimeout: 10000,

    // A callback function called once configs are read but before any environment
    // setup. This will only run once, and before onPrepare.
    // You can specify a file containing code to run by setting beforeLaunch to
    // the filename string.
    //beforeLaunch: function() {
    //  // At this point, global variable 'protractor' object will NOT be set up,
    //  // and globals from the test framework will NOT be available. The main
    //  // purpose of this function should be to bring up test dependencies.
    //},

    // A callback function called once protractor is ready and available, and
    // before the specs are executed.
    // If multiple capabilities are being run, this will run once per
    // capability.
    // You can specify a file containing code to run by setting onPrepare to
    // the filename string.
    onPrepare: function () {
        //browser.params.exportDir=runConfig.multiCapabilities[0].chromeOptions.prefs.download.default_directory;
        //var reporters = require(environmentConfig.jasmineReporter);
        //var reporters = require('jasmine-reporters');
        //if (process.env.TEAMCITY_VERSION) {
        //    jasmine.getEnv().addReporter(new jasmineReporters.TeamCityReporter());
        //}
        //else {
            //jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            //  consolidateAll: true,
            //  savePath: 'testresults',
            //  filePrefix: 'xmloutput'
            //}));

            //jasmine.getEnv().addReporter(new jasmineReporters.TeamCityReporter());

            //var SpecReporter = require('jasmine-spec-reporter');
            // add jasmine spec reporter
            //jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));

            //var HtmlReporter = require('protractor-html-screenshot-reporter');
            //// Add a screenshot reporter and store screenshots to `/tmp/screnshots`:
            //jasmine.getEnv().addReporter(new HtmlReporter({
            //  baseDirectory: 'testresults/screenshots'
            //}));

            // var HtmlReporter = require('./reporters/htmlReporter');
            // jasmine.getEnv().addReporter(new HtmlReporter({
            //     baseDirectory: reportConfig.baseDirectory,
            //     imgUrlBase: reportConfig.imgUrlBase,
            //     FilterSkippedCase: reportConfig.FilterSkippedCase,
            //     removeImageWhenSuccess:reportConfig.removeImageWhenSuccess,
            //     versions:runConfig.Versions,
            //     currentScriptName:function(){return browser.params.currentScriptName}
            // }, logUtil.logger));
        //}

        // this is not a AngularJS website
        browser.ignoreSynchronization = true;

        browser.get('/');
    },

    //// A callback function called once tests are finished.
    //onComplete: function() {
    //  // At this point, tests will be done but global objects will still be
    //  // available.
    //},

    //// A callback function called once the tests have finished running and
    //// the WebDriver instance has been shut down. It is passed the exit code
    //// (0 if the tests passed). This is called once per capability.
    //onCleanUp: function(exitCode) {},

    //// A callback function called once all tests have finished running and
    //// the WebDriver instance has been shut down. It is passed the exit code
    //// (0 if the tests passed). This is called only once before the program
    //// exits (after onCleanUp).
    afterLaunch: function () {
        if (reportConfig.sendEmail === true) {
            emailUtil.sendEamilByTask(browser.params.currentReportFileName,browser.params.currentEamilReportFileName, 1);
        }
    },
    // The params object will be passed directly to the Protractor instance,
    // and can be accessed from your test as browser.params. It is an arbitrary
    // object and can contain anything you may need in your test.
    // This can be changed via the command line as:
    //   --params.login.user 'Joe'
    params: appConfig.params,

    // If set, protractor will save the test output in json format at this path.
    // The path is relative to the location of this config.
    //resultJsonOutputFile: 'testresults/result.json',

    // If true, protractor will restart the browser between each test.
    // CAUTION: This will cause your tests to slow down drastically.
    restartBrowserBetweenTests: false,

    // ---------------------------------------------------------------------------
    // ----- The test framework --------------------------------------------------
    // ---------------------------------------------------------------------------

    // Test framework to use. This may be one of:
    //  jasmine, jasmine2, cucumber, mocha or custom.
    //
    // When the framework is set to "custom" you'll need to additionally
    // set frameworkPath with the path relative to the config file or absolute
    //  framework: 'custom',
    //  frameworkPath: './frameworks/my_custom_jasmine.js',
    // See github.com/angular/protractor/blob/master/lib/frameworks/README.md
    // to comply with the interface details of your custom implementation.
    //
    // Jasmine and Jasmine2 are fully supported as test and assertion frameworks.
    // Mocha and Cucumber have limited support. You will need to include your
    // own assertion framework (such as Chai) if working with Mocha.
    framework: 'jasmine2',

    //// Options to be passed to minijasminenode.
    ////
    //// See the full list at https://github.com/juliemr/minijasminenode/tree/jasmine1
    //jasmineNodeOpts: {
    //  // If true, display spec names.
    //  isVerbose: false,
    //  // If true, print colors to the terminal.
    //  showColors: true,
    //  // If true, include stack traces in failures.
    //  includeStackTrace: true,
    //  // Default time to wait in ms before a test fails.
    //  defaultTimeoutInterval: 30000
    //},

    // Options to be passed to jasmine2.
    //
    // See https://github.com/jasmine/jasmine-npm/blob/master/lib/jasmine.js
    // for the exact options available.
    jasmineNodeOpts: {
        // If true, print colors to the terminal.
        showColors: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: environmentConfig.defaultTimeoutInterval,
        // Function called to print jasmine results.
        print: function (msg) { }
        // If set, only execute specs whose names match the pattern, which is
        // internally compiled to a RegExp.
        //grep: 'pattern',
        // Inverts 'grep' matches
        //invertGrep: false
    }

    //// Options to be passed to Mocha.
    ////
    //// See the full list at http://mochajs.org/
    //mochaOpts: {
    //  ui: 'bdd',
    //  reporter: 'list'
    //},

    //// Options to be passed to Cucumber.
    //cucumberOpts: {
    //  // Require files before executing the features.
    //  require: 'cucumber/stepDefinitions.js',
    //  // Only execute the features or scenarios with tags matching @dev.
    //  // This may be an array of strings to specify multiple tags to include.
    //  tags: '@dev',
    //  // How to format features (default: progress)
    //  format: 'summary'
    //}

};
