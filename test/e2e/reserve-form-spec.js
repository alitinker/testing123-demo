'use strict';

var ReservesPage = require('./pages/course-reserves-page.js');

describe('The course reserve app (making a reservation)', function() {

  var courseReservesPage;

  beforeEach(function() {
    courseReservesPage = new ReservesPage();
    courseReservesPage.open();
  });

  it('should make a reservation', function() {
	courseReservesPage.firstName.sendKeys('Minerva');
	courseReservesPage.lastName.sendKeys('McGonagall');
	courseReservesPage.email.sendKeys('mmcgonagall@hogwarts.ack.uk');
	courseReservesPage.dept.sendKeys('Transfiguration');
	courseReservesPage.libSection('Other');
	courseReservesPage.courseNumber.sendKeys('5678');
	courseReservesPage.courseTitle.sendKeys('Transfiguration II');
	courseReservesPage.courseSection.sendKeys('A');
	courseReservesPage.author.sendKeys('Emeric Switch');
	courseReservesPage.itemTitle.sendKeys('A Beginner\'s Guide to Transfiguration');
  });

});