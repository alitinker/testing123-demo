#TESTING 1-2-3

Automated testing demo for edUI conference.

##Set up

You need to install the following items in order to download the dependencies and run the sample tests. Follow the installation procedures that are outlined in the documentation for each item:

- [NodeJS](https://nodejs.org)
- [Protractor](http://www.protractortest.org/)
- [Gulp](http://gulpjs.com/)

Then, install the dependencies listed in package.json. To do this, cd into the root of the project folder and run `npm install`. 

Don't use `sudo` when you install the dependencies. If you do, the postinstall script will probably not work and you will have to run `webdriver-manager update` manually in order to get the drivers needed to run the protractor tests.

##Build

After you've installed the items listed above and the dependencies, build the dist files by running this command:
	
	gulp build

If you want to play around with the project files and change them, use this command to watch the files and recompile them when a change has been made. It will also spin up a local server, allowing you to view the app by navigating to http://localhost:8080/:

	gulp watch

##Run the tests

To run the unit tests you can use this gulp command:
	
	gulp karma

To run the e2e tests, use this gulp command:

	gulp e2e

Alternatively, you can use the commands `karma start` to run the unit tests and `protractor` to run the e2e tests. 


