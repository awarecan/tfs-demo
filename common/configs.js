var utilities = require('./../utils/utilities.js');

function Configs(environmentName) {
    var environmentDir = __dirname + '/../environments/' + environmentName + '/';

    this.environmentConfig = utilities.readJsonFile(environmentDir + 'env.config.json');
    this.appConfig = utilities.readJsonFile(environmentDir + 'app.config.json');
    this.runConfig = utilities.readJsonFile(environmentDir + 'run.config.json');
    this.reportConfig = utilities.readJsonFile(environmentDir + 'report.config.json');
}

module.exports = Configs;
