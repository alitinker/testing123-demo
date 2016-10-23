'use strict';

var ReservesPage = require('./pages/course-reserves-page.js');

describe('The course reserve app (reserving course material)', function() {

  var courseReservesPage;

  beforeEach(function() {
    courseReservesPage = new ReservesPage();
    courseReservesPage.open();
  });

  it('should reserve course material', function() {
  	courseReservesPage.fillForm();

  	var reserveForm = courseReservesPage.formContainer;
  	expect(reserveForm.isDisplayed()).toBe(false);

  	var reserveStatus = courseReservesPage.formStatus;
  	expect(reserveStatus.isDisplayed()).toBe(true);
  });

});