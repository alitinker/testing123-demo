#TESTING 1-2-3

Automated testing demo for edUI conference. View this fun, little app at [dev.alisontinker.codes/testing123](http://www.dev.alisontinker.codes/testing123).

##Set up

You need to install the following items so that you can download the dependencies and run the sample tests. Follow the installation procedures that are outlined in the documentation for each item:

- [NodeJS](https://nodejs.org)
- [Protractor](http://www.protractortest.org/)
- [Gulp](http://gulpjs.com/)

Then, install the dependencies listed in package.json (cd into the root of the project folder and run `npm install`). 

Don't use `sudo` when you install the dependencies. If you do, the postinstall script will probably not work and you will have to run `webdriver-manager update` manually in order to get the drivers needed to run the protractor tests. If you must use `sudo` then you can do the webdriver-manager update with this command:

	node_modules/.bin/webdriver-manager update

##Build

If you want to play around with the project files and change them, use this command to watch the files and recompile them when a change has been made. It will also spin up a local server, allowing you to view the app by navigating to http://localhost:8080/:

	gulp watch

##Run the tests

To run the unit tests you can use this gulp command:
	
	gulp unit

To run the e2e tests, use this gulp command:

	gulp e2e

Alternatively, you can use the commands `karma start` to run the unit tests and `protractor` to run the e2e tests. 


