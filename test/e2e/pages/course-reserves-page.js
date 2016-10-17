'use strict';

/*
 * Page object for Hogwarts Course Reserves.
 */
var courseReservesPage = function() {

	this.open = function() {
		browser.get('http://127.0.0.1:8080/#/');
	};

	//Form elements
	this.firstName = element(by.css('[name="firstName"]'));
	this.lastName = element(by.css('[name="lastName"]'));
	this.email = element(by.css('[name="email"]'));
	this.dept = element(by.css('[name="dept"]'));
	this.courseNumber = element(by.css('[name="courseNumber"]'));
	this.courseSection = element(by.css('[name="courseSection"]'));
	this.courseTitle = element(by.css('[name="courseTitle"]'));
	this.author = element(by.css('[name="author"]'));
	this.itemTitle = element(by.css('[name="itemTitle"]'));

	this.libSection = function ( optionName ) {
		element(by.cssContainingText('option', optionName)).click();
	};

};



module.exports = courseReservesPage;
