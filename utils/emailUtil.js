var fs = require('fs');
var path = require('path');

var emailUtil = function () {
};

emailUtil.prototype.sendEamilByTask = function (reportFile, emailReportFile,afterMinute, callback) {
    //browser.params.currentReportFileName;
    if (!reportFile) {
        throw new Error('must to set report File');
    }
    if (!afterMinute) {
        afterMinute = 2;
    }
    var emailBat = "email.bat";
    var emailPath = path.join(path.dirname(__dirname), emailBat);
    if (fs.existsSync(emailPath)) {
        fs.unlinkSync(emailPath);
    }
    var bat = 'cd/d ' + path.dirname(__dirname) + '\r\n' + 'node email.js ' + reportFile +' '+emailReportFile;
    fs.appendFileSync(emailPath, bat);

    var task = 'at ' + getTaskTime(afterMinute) + ' ' + emailPath;
    console.log("Create Task: " + task);
    console.log('bat: ' + bat);
    var child_process = require('child_process');
    child_process.exec(task, function (err, stdout, stderr) {
        var id;
        if (err) {
            console.log('create task error:' + err);
        } else {
            id = stdout.replace(/\r/g, '').replace(/\n/g, '').substr(stdout.indexOf('=') + 1);
        }
        if (callback) {
            callback(id)
        }
    });
};

function getTaskTime(afterMinute) {
    var now = new Date();
    var currentMinutes = now.getMinutes() + afterMinute;
    var minutes = currentMinutes % 60;
    var hour = (now.getHours() + parseInt(currentMinutes / 60)) % 24;
    return hour + ":" + minutes;
}

module.exports = new emailUtil();