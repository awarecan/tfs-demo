//Usefull function goes here
//
var path = require('path');
var fileSystem = require('fs');

var utilities = function (debugOn) {
    this.debugOn = true;
};

utilities.prototype.getCurrentTimeStamp = function () {
    var now = new Date();
    return ((now.getMonth() + 1) + '/' +
    (now.getDate()) + '/' +
    now.getFullYear() + " " +
    now.getHours() + ':' +
    ((now.getMinutes() < 10)
        ? ("0" + now.getMinutes())
        : (now.getMinutes())) + ':' +
    ((now.getSeconds() < 10)
        ? ("0" + now.getSeconds())
        : (now.getSeconds())));
};
utilities.prototype.getCurrentDay = function () {
    var d = new Date();
    var year = d.getFullYear().toString();
    var month = d.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    var day = d.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    return year + month + day;
};

utilities.prototype.formatDate = function (d) {
    var year = d.getFullYear().toString();
    var month = d.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    var day = d.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    return year + '-' + month + '-' + day;
};

utilities.prototype.createUnique = function () {
    var d = new Date();
    var year = d.getFullYear().toString();
    var month = d.getMonth().toString();
    var day = d.getDate();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    var timestamp = (year + month + day + hours + mins + secs);
    //console.log(timestamp);
    return timestamp;
};

utilities.prototype.jsonParser = function (fileFullPath) {

    var data = fileSystem.readFileSync(fileFullPath);
    try {
        return JSON.parse(data);

    } catch (err) {
        console.error('Unable to parse json file: ' + fileFullPath);
        console.error(err);
        throw err;
    }
};

utilities.prototype.writeToJsonFile = function (jsonObject, fileFullPath) {

    var data = JSON.stringify(jsonObject);

    fileSystem.writeFile(fileFullPath, data, function (err) {
        if (err) {
            console.error('Unable write json object to file: ' + fileFullPath);
            console.log(err);
            throw err
        }
    });
};

utilities.prototype.readJsonFile = function (fileFullPath) {
    var data = fileSystem.readFileSync(fileFullPath);
    var jsonObject;

    try {
        jsonObject = JSON.parse(data);
        fileSystem.existsSync(fileFullPath);
        return jsonObject;

    } catch (err) {
        console.error('Unable to parse json file: ' + fileFullPath);
        console.error(err);
        throw err;
    }
};

utilities.prototype.toContain = function (str1, str2) {
    return str1.indexOf(str2) != -1;
};

utilities.prototype.toBe = function (str1, str2) {
    return str1 === str2;
};

utilities.prototype.isArray = function (myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
};

utilities.prototype.random = function (howMany, chars) {
    var crypto = require('crypto');

    chars = chars
        || "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
    var rnd = crypto.randomBytes(howMany)
        , value = new Array(howMany)
        , len = chars.length;

    for (var i = 0; i < howMany; i++) {
        value[i] = chars[rnd[i] % len]
    }

    return value.join('');
};
utilities.prototype.getFileName = function (fullFileName) {
    return path.basename(fullFileName);
};

utilities.prototype.copyFileSync = function (srcPath, destPath) {
    mkdirSync(path.dirname(destPath));
    var data = fileSystem.readFileSync(srcPath);
    fileSystem.writeFileSync(destPath, data);
    //fileSystem.createReadStream( srcPath ).pipe( fileSystem.createWriteStream( destPath ));
};

utilities.prototype.removeFileSync = function (filePath) {
    if (fileSystem.existsSync(filePath)) {
        fileSystem.unlinkSync(filePath);
    }
};

utilities.prototype.removeFileByExtNameInDirSync = function (dirPath, extName) {
    if (extName.indexOf('.') < 0) {
        extName = '.' + extName;
    }
    if (!fileSystem.existsSync(dirPath))
        return;
    var files = fileSystem.readdirSync(dirPath);
    files.forEach(function (file, index) {
        var filePath = dirPath + '/' + file;
        if (!fileSystem.statSync(filePath).isDirectory() && path.extname(file) == extName) {
            fileSystem.unlinkSync(filePath);
        }
    });
};
utilities.prototype.removeFileInDirSync = function (dirPath, filePattern) {
    if (!fileSystem.existsSync(dirPath))
        return;
    var reg = new RegExp(filePattern);
    var files = fileSystem.readdirSync(dirPath);
    files.forEach(function (file, index) {
        var filePath = dirPath + '/' + file;
        if (reg.test(file) && !fileSystem.statSync(filePath).isDirectory()) {
            fileSystem.unlinkSync(filePath);
        }
    });
};

utilities.prototype.replaceFile = function (srcPath, pattern, text) {
    var data = fileSystem.readFileSync(srcPath, {encoding: 'utf8'});
    fileSystem.writeFileSync(srcPath, data.replace(pattern, text));
};

utilities.prototype.mkdirSync = function (dirPath) {
    return mkdirSync(dirPath);
};

function mkdirSync(dirPath) {
    if (fileSystem.existsSync(dirPath)) {
        return true;
    } else {
        if (mkdirSync(path.dirname(dirPath))) {
            fileSystem.mkdirSync(dirPath);
            return true;
        }
    }
}

utilities.prototype.rmdirSync = function (dirPath) {
    rmdirSync(dirPath);
};
function rmdirSync(dirPath) {
    if (!fileSystem.existsSync(dirPath))
        return;
    var files = fileSystem.readdirSync(dirPath);
    files.forEach(function (file, index) {
        var filePath = dirPath + '/' + file;
        if (fileSystem.statSync(filePath).isDirectory()) {
            rmdirSync(filePath);
        } else {
            fileSystem.unlinkSync(filePath);
        }
    });
    fileSystem.rmdirSync(dirPath);
}
module.exports = new utilities();
