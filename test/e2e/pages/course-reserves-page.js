'use strict';

/*
 * Page object for Hogwarts Course Reserves.
 */
var couseReservesPage = function() {

	this.open = function() {
		browser.get('http://127.0.0.1:8080/#/');
	};

	this.submitButton = element(by.className('button'));
	// this.takenTableBtn = element(by.className('button-yellow'));
	// this.descriptionLink = element(by.binding('room.roomname'));
 
	// this.selectedTab = element(by.className('selected'));
	// this.cancelMessage = element(by.className('msg-cancel'));
	// this.successMessage = element(by.binding('reserveSuccess.message'));

	//Form elements
	this.firstName = element(by.css('[name="firstName"]'));
	this.lastName = element(by.css('[name="lastName"]'));
	this.email = element(by.css('[name="email"]'));
	this.dept = element(by.css('[name="dept"]'));
	this.libSection = element(by.css('[name="libSection"]'));
	this.courseTitle = element(by.css('[name="courseTitle"]'));
	this.courseSection = element(by.css('[name="courseSection"]'));
	this.courseTitle = element(by.css('[name="courseTitle"]'));
	this.author = element(by.css('[name="author"]'));
	this.itemTitle = element(by.css('[name="itemTitle"]'));

};



module.exports = courseReservesPage;
