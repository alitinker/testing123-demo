'use strict';

var ReservesPage = require('./pages/course-reserves-page.js');

describe('The course reserve app (making a reservation)', function() {

  var courseReservesPage;

  beforeEach(function() {
    courseReservesPage = new ReservesPage();
    courseReservesPage.open();
  });

  it('should make a reservation', function() {
	courseReservesPage.fillForm();

	var reserveForm = courseReservesPage.formContainer;
	expect(reserveForm.isDisplayed()).toBe(true);

	var reserveStatus = courseReservesPage.formStatus;
	expect(reserveStatus.isDisplayed()).toBe(false);
	
  });

});