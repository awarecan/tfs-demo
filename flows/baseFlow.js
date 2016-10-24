var logUtil = require('./../utils/logUtil');
var flowUtil = require('./../utils/flowUtil');

function FlowBase(checkUrl, pageUrl, goto, nonAngular) {
    this.pageUrl = pageUrl;
    var self = this;
    if (checkUrl) {
        var previousUrl;
        logUtil.logDebug("Expected url is:" + pageUrl);
        browser.wait(() => {
            return browser.getCurrentUrl().then(function (url) {
                if (goto) {
                    goto = false;
                    logUtil.logDebug("Now is: " + url);
                    if (!checkPageUrl(url, pageUrl)) {
                        if (typeof pageUrl === "string") {
                            if (pageUrl.indexOf("http") == 0) {
                                logUtil.logDebug("goto: " + pageUrl);
                                return browser.get(pageUrl).then(() => { return false; });
                            } else {
                                logUtil.logDebug("goto: " + browser.params.baseUrl + pageUrl);
                                return browser.get(browser.params.baseUrl + pageUrl).then(() => { return false; });
                            }
                        } else { return true; }
                    }
                } else {
                    if (url !== previousUrl) {
                        previousUrl = url;
                        logUtil.logDebug("Actual url is: " + url);
                    }
                    return checkPageUrl(url, pageUrl);
                }
            });
        }, this.waitTime)
    }

    function checkPageUrl(url, pageUrl) {
        if (typeof pageUrl === "string") {
            return (url.indexOf(pageUrl) >= 0);
        } else {
            return pageUrl.test(url);
        }
    }
  
}

FlowBase.prototype.gotoPage = function () {
    var gotoUrl = this.pageUrl;
    browser.getCurrentUrl().then(function (url) {
        if (url.indexOf(gotoUrl) < 0) {
            browser.get(gotoUrl);
        }
    });
    return this;
};
var handleAssertLog = function (actualValue, expectValue, msgOptions, msg, handleFn) {
    var result = false;
    if (typeof actualValue === 'object') {
        actualValue.then(function (text) {
            result = handleFn(text, expectValue);
            printAssertLog(text, expectValue, result, msgOptions, msg);
        }, function (err) {
            //console.log('err:'+err);
            printAssertLog('exception', expectValue, false, msgOptions, msg);
        });
    } else {
        result = handleFn(actualValue, expectValue);
        printAssertLog(actualValue, expectValue, result, msgOptions, msg);
    }
    return result;
};

var printAssertLog = function (actualValue, expectValue, result, msgOptions, msg) {
    msgOptions = msgOptions || {};
    if (!msg)
        msg = "Assert Expect: " + expectValue;
    msg = msg + " : " + " --actual: " + actualValue + " --expect: " + expectValue + " --result: ";
    if (result) {
        msg = msg + "Pass!";
        logUtil.logDebug(msg);
        if (msgOptions.expect || msgOptions.success) {
            printAssertSuccessMsg(msgOptions.expect, msgOptions.success.replace('{0}', actualValue));
        }
    } else {
        flowUtil.takeScreen(null, function (url) {
            msg = msg + "Fail! ImageUrl:" + url;
            logUtil.logDebug(msg);
        });
        if (msgOptions.expect || msgOptions.fail) {
            printAssertFailMsg(msgOptions.expect, msgOptions.fail.replace('{0}', actualValue));
        }
    }
};
var printAssertSuccessMsg = function (expectMsg, actualMsg) {
    logUtil.logInfo("Expected Results:" + expectMsg + "  Actual Results:" + actualMsg);
};
var printAssertFailMsg = function (expectMsg, actualMsg) {
    logUtil.logError("Expected Results:" + expectMsg + "  Actual Results:" + actualMsg);
};

FlowBase.prototype.assertFalse = function (actualValue, msgOptions, msg) {
    handleAssertLog(actualValue, false, msgOptions, msg, function (actual, expect) {
        return actual === expect;
    });
    //printAssertEqualLog(actualValue, false, msgOptions, msg);
    expect(actualValue).toBeFalsy();
    return this;
};

FlowBase.prototype.assertTrue = function (actualValue, msgOptions, msg) {
    handleAssertLog(actualValue, true, msgOptions, msg, function (actual, expect) {
        return actual === expect;
    });
    //printAssertEqualLog(actualValue, true, msgOptions, msg);
    expect(actualValue).toBeTruthy();
    return this;
};

FlowBase.prototype.assertIsDefined = function (actualValue) {
    expect(actualValue).toBeDefined();
    return this;
};

FlowBase.prototype.assertAreEqual = function (actualValue, expectValue, msgOptions, msg) {
    handleAssertLog(actualValue, expectValue, msgOptions, msg, function (actual, expect) {
        return actual === expect;
    });
    //printAssertEqualLog(actualValue, expectValue, msgOptions, msg);
    expect(actualValue).toEqual(expectValue);
    return this;
};

FlowBase.prototype.assertAreNotEqual = function (actualValue, expectValue, msgOptions, msg) {
    handleAssertLog(actualValue, expectValue, msgOptions, msg, function (actual, expect) {
        return actual !== expect;
    });
    //printAssertNotEqualLog(actualValue, expectValue, msgOptions, msg);
    expect(actualValue).not.toEqual(expectValue);
    return this;
};

FlowBase.prototype.assertIsContain = function (actualValue, expectValue, msgOptions, msg) {
    handleAssertLog(actualValue, expectValue, msgOptions, msg, function (actual, expect) {
        return actual.indexOf(expect) !== -1;
    });
    //printAssertContainLog(actualValue, expectValue, msgOptions, msg);
    expect(actualValue).toContain(expectValue);
    return this;
};

FlowBase.prototype.assertIsNotContain = function (actualValue, expectValue, msgOptions, msg) {
    handleAssertLog(actualValue, expectValue, msgOptions, msg, function (actual, expect) {
        return actual.indexOf(expect) === -1;
    });
    //printAssertNotContainLog(actualValue, expectValue, msgOptions, msg);
    expect(actualValue).not.toContain(expectValue);
    return this;
};

FlowBase.prototype.assertIsMatchPattern = function (actualValue, pattern, msgOptions, msg) {
    handleAssertLog(actualValue, pattern, msgOptions, msg, function (actual, expect) {
        return new RegExp(expect).test(actual);
    });
    expect(actualValue).toMatch(pattern);
    return this;
};

FlowBase.prototype.assertIsLessThan = function (actualValue, expectValue, msgOptions, msg) {
    handleAssertLog(actualValue, expectValue, msgOptions, msg, function (actual, expect) {
        return actual < expect
    });
    expect(actualValue).toBeLessThan(expectValue);
    return this;
};
FlowBase.prototype.assertIsNotLessThan = function (actualValue, expectValue, msgOptions, msg) {
    handleAssertLog(actualValue, expectValue, msgOptions, msg, function (actual, expect) {
        return actual >= expect
    });
    expect(actualValue).not.toBeLessThan(expectValue);
    return this;
};
FlowBase.prototype.assertIsGreaterThan = function (actualValue, expectValue, msgOptions, msg) {
    handleAssertLog(actualValue, expectValue, msgOptions, msg, function (actual, expect) {
        return actual > expect
    });
    expect(actualValue).toBeGreaterThan(expectValue);
    return this;
};
FlowBase.prototype.assertIsNotGreaterThan = function (actualValue, expectValue, msgOptions, msg) {
    handleAssertLog(actualValue, expectValue, msgOptions, msg, function (actual, expect) {
        return actual <= expect
    });
    expect(actualValue).not.toBeGreaterThan(expectValue);
    return this;
};

FlowBase.prototype.waitForCondition = function (condition, timeoutInSeconds, message) {
    browser.driver.wait(condition, timeoutInSeconds * 1000, message);
    return this;
};

FlowBase.prototype.wait = function (timeInSeconds) {
    timeInSeconds = timeInSeconds || 30;
    logUtil.logDebug("wait " + timeInSeconds + " seconds.");
    browser.driver.sleep(timeInSeconds * 1000);
    return this;
};

FlowBase.prototype.step = function (message) {
    logUtil.log("step: " + message);
    return this;
};

FlowBase.prototype.execute = function (callback) {
    browser.controlFlow().execute(callback);
    return this;
};

FlowBase.prototype.takeScreen = function (imgUrl, callback) {
    flowUtil.takeScreen(imgUrl, callback);
    return this;
};

FlowBase.prototype.takeScreenForLog = function (callback) {
    flowUtil.takeScreen(null, function (url) {
        callback(" ImageUrl:" + url)
    });
    return this;
};

FlowBase.prototype.log = function (message) {
    logUtil.log(message);
    return this;
};

FlowBase.prototype.logDebug = function (message) {
    logUtil.logDebug(message);
    return this;
};

FlowBase.prototype.logInfo = function (message) {
    logUtil.logInfo(message);
    return this;
};

FlowBase.prototype.logWarn = function (message) {
    logUtil.logWarn(message);
    return this;
};

FlowBase.prototype.logError = function (message) {
    logUtil.logError(message);
    return this;
};
module.exports = FlowBase;