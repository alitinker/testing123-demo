'use strict';

/*
 * Page object for Hogwarts Course Reserves.
 */
var courseReservesPage = function() {

	this.open = function() {
		browser.get('http://127.0.0.1:8080/#/');
	};

	//Form elements
	this.formContainer = element(by.id('formContainer'));
	this.formStatus = element(by.id('formStatus'));

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

	this.submitButton = element(by.css('[type="submit"]'));

	//Fill Form
	this.fillForm = function () {
		this.firstName.sendKeys('Minerva');
		this.lastName.sendKeys('McGonagall');
		this.email.sendKeys('mmcgonagall@hogwarts.ack.uk');
		this.dept.sendKeys('Transfiguration');
		this.libSection('Other');
		this.courseNumber.sendKeys('5678');
		this.courseTitle.sendKeys('Transfiguration II');
		this.courseSection.sendKeys('A');
		this.author.sendKeys('Emeric Switch');
		this.itemTitle.sendKeys('A Beginner\'s Guide to Transfiguration');
		this.submitButton.click();
	};
};



module.exports = courseReservesPage;
