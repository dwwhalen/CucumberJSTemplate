/*
Basic configuration to run your cucumber
feature files and step definitions with protractor.
**/
exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
 // baseUrl: 'http://sd-preflight.pub.sddev.local/schedule/554',
 directConnect: true,
 capabilities: {
      browserName:'chrome',
	    shardTestFiles: false,
      maxInstances: 1,
      chromeOptions: {
            args: ['disable-infobars']
      }
  },
  framework: 'custom',  // set to "custom" instead of cucumber.
  frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
  specs: [
    './features/tests/login/*.feature',
    './features/tests/postflight/*.feature',
    './features/tests/preflight/*.feature',
    './features/tests/profile/*.feature',
  ],
  cucumberOpts: {
    require: [
      './features/step_definitions/*.js',
      './features/step_definitions/postflight/*.js',
      './features/step_definitions/preflight/*.js',
      './features/step_definitions/profile/*.js', 
      './features/support/*.js'
    ],
    'no-colors': false,
    tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    strict: true,                  // <boolean> fail if there are any undefined or pending steps
    format: ["pretty"],            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    format:'json:./reports/report.json',
    dryRun: false,                 // <boolean> invoke formatters without executing steps
    compiler: [],                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    failFast: true,
	keepAlive: false
  },
  onPrepare: function () {
    browser.manage().window().maximize(); // maximize the browser before executing the feature files
},
getPageTimeout: 30000,
allScriptsTimeout: 30000,
ignoreUncaughtExceptions: true,
plugins: [{
   package: 'protractor-multiple-cucumber-html-reporter-plugin',
   options:{
		automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true,
		displayDuration: true,
		customData: {
		title: 'Run info',
		data: [
			{label: 'Project', value: 'Cucumber Tests for SD Scheduler'},
			{label: 'Release', value: '1.0.0'}
		]
		}
   }
  }]
};