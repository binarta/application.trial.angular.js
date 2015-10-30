module.exports = function(config) {
    config.set({
        basePath:'.',
        frameworks:['jasmine'],
        files:[
            {pattern:'../bower_components/angular/angular.js'},
            {pattern:'../bower_components/angular-mocks/angular-mocks.js'},
            {pattern:'../src/application.trial.js'},
            {pattern:'../test/**/*.js'}
        ],
        browsers:['PhantomJS']
    });
};