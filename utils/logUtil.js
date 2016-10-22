var util = require('util');
var winston = require('winston');

winston.emitErrs = true;

var logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            name: 'full-log-file',
            level: 'debug',
            filename: './logs/all-logs.log',
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false,
            timestamp: true
        }),
        new winston.transports.Console({
            name: 'console',
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true,
            timestamp: true
        })
    ],
    exitOnError: false
});
// override console.log

function formatArgs(args) {
    return [util.format.apply(util.format, Array.prototype.slice.call(args))];
}

console.log = function () {
    logger.info.apply(logger, formatArgs(arguments));
};
console.info = function () {
    logger.info.apply(logger, formatArgs(arguments));
};
console.warn = function () {
    logger.warn.apply(logger, formatArgs(arguments));
};
console.error = function () {
    logger.error.apply(logger, formatArgs(arguments));
};
console.debug = function () {
    logger.debug.apply(logger, formatArgs(arguments));
};


var logUtil = function () {
    Object.defineProperty(this, 'logger', {
        get: function () {
            return logger;
        }
    });
};

logUtil.prototype.log = function (msg) {
    browser.controlFlow().execute(function () {
        logger.info(msg);
    });
};
logUtil.prototype.logDebug = function (msg) {
    browser.controlFlow().execute(function () {
        logger.debug(msg);
    });
};
logUtil.prototype.logInfo = function (msg) {
    browser.controlFlow().execute(function () {
        logger.info(msg);
    });
};
logUtil.prototype.logWarn = function (msg) {
    browser.controlFlow().execute(function () {
        logger.warn(msg);
    });
};
logUtil.prototype.logError = function (msg) {
    browser.controlFlow().execute(function () {
        logger.error(msg);
    });
};
module.exports = new logUtil();
