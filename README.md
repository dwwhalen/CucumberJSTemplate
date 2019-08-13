# Introduction
This project is for Cucumber/Protractor tests in JavaScript.

# Getting Started
1. Make sure protractor is installed, otherwise run:

	```$ npm install -g protractor```

2. Open terminal session and navigate to the project to install dependencies

	```$ npm install```

3. Install slenium

	```$ npm run webdriver-update```

4. Start Selenium

	```$ webdriver-manager start```

#Leading EDJE
	npm run e2e -- --cucumberOpts.tags=@le
	protractor --cucumberOpts.tags=@le

# OLD - no longer valid 
## Login - no longer valid
	npm run e2e -- --cucumberOpts.tags=@login --disableChecks
	protractor --specs features/tests/login/login.feature

## Profile - no longer valid
	npm run e2e -- --cucumberOpts.tags=@profile --disableChecks
	protractor --specs features/tests/profile/profileAircraft.feature
	protractor --specs features/tests/profile/profileCompany.feature
	protractor --specs features/tests/profile/profilePerson.feature
	protractor --specs features/tests/profile/profileRolesManagement.feature
	protractor --specs features/tests/profile/profileAirport.feature

## Preflight - no longer valid
	npm run e2e -- --cucumberOpts.tags=@preflight --disableChecks
	protractor --specs features/tests/preflight/preflightAircraftEvents.feature
