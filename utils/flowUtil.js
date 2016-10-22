var fs = require('fs');
var path = require('path');
var utilities = require('./utilities.js');

var flowUtil = function () {
};

flowUtil.prototype.takeScreen = function (imgUrl, callback) {
  //
   browser.waitForAngular().then(function(){
     browser.takeScreenshot().then(function(data){
       if(!imgUrl){
        //set the CurrentSpecImgBaseDir on specStart(report);
            var baseDir = browser.params.CurrentSpecImgBaseDir || 'testresults/img';
            imgUrl = path.join(baseDir, new Date().getTime() + utilities.random(5) + '.png');
      }
      utilities.mkdirSync(path.dirname(imgUrl));
        fs.appendFileSync(imgUrl, new Buffer(data, 'base64'));
      //var stream = fs.createWriteStream(imgUrl);
      //stream.write(new Buffer(data, 'base64'));
      //stream.end();
      //stream.close();
        if (typeof callback === 'function') {
        callback(imgUrl);
      }
    });
   });
};
//var instance;

//module.exports = function(){
//    if(typeof instance !== 'object'){
//        instance = new flowUtil();
//    }
//    return instance;
//};
module.exports = new flowUtil();