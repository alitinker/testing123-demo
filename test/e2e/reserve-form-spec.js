'use strict';

var courseReservesPage = require('./pages/course-reserve-page');

describe('The course reserve app (making a reservation)', function() {

  var courseReservesPage;

  beforeEach(function() {
    courseReservesPage = new courseReservePage();
    courseReservesPage.open();
    // see if we can remove this workaround
    browser.ignoreSynchronization = true;
  });

  it('should make a reservation', function() {

  });

});