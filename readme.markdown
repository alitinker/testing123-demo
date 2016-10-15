#TESTING 1-2-3

Automated testing demo for edUI conference.

##Set up

You need to install the following items in order to download the dependencies and run the sample tests. Follow the installation procedures that are outlined in their documenation:

- [NodeJS](https://nodejs.org)
- [Protractor](http://www.protractortest.org/)
- [Gulp](http://gulpjs.com/)

##Build

After you've installed the items listed above, cd into the root of this project folder and build the dist files by running this command:
	
	`gulp build`

If you want to play around with the project files and change them, use this command to watch the files and recompile them when a change has been made:

	`gulp watch`

##Run the tests

To run the unit tests you can use this gulp command:
	
	`gulp karma`

To run the e2e tests, use this gulp command:

	`gulp e2e`

You can alternatively use the commands `karma start` to run the unit tests and `protractor` to run the e2e tests. 


