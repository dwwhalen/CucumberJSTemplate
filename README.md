# Introduction
This project is for Cucumber/Protractor tests in JavaScript for Scheduler, postflight, preflight, and profile.

# Getting Started
1. Make sure protractor is installed, otherwise run:

	```$ npm install -g protractor```

2. Open terminal session and navigate to the project to install dependencies

	```$ cd ...*/SD.Scheduler.UI.CucumberProtractor```
	```$ npm install```
	```$ npm run webdriver-update```

#run everything
	npm run e2e

#Login	
	npm run e2e -- --cucumberOpts.tags=@login --disableChecks
	protractor --specs features/tests/login/login.feature

#Profile
	npm run e2e -- --cucumberOpts.tags=@profile --disableChecks
	protractor --specs features/tests/profile/profileAircraft.feature
	protractor --specs features/tests/profile/profileCompany.feature
	protractor --specs features/tests/profile/profilePerson.feature
	protractor --specs features/tests/profile/profileRolesManagement.feature
	protractor --specs features/tests/profile/profileAirport.feature

#Preflight
	npm run e2e -- --cucumberOpts.tags=@preflight --disableChecks
	protractor --specs features/tests/preflight/preflightAircraftEvents.feature

#Postflight
	npm run e2e -- --cucumberOpts.tags=@postflight --disableChecks
	protractor --specs features/tests/postflight/postflightTripManager.feature