describe('ReserveCtrl', function() {
  beforeEach(module('courseReserveApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('user reserve form', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('ReserveCtrl', { $scope: $scope });
    });

    it('adds form data to object if submit button is clicked', inject(['DataService',
      function(DataService) {
        $scope.data = {
          firstName: 'Minerva',
          lastName: 'McGonagall',
          email: 'mmcgonagall@hogwarts.ack.uk',
          dept: 'Transfiguration',
          libSection: 'Other',
          courseNumber: '5678',
          courseTitle: 'Transfiguration II',
          courseSection: 'A',
          author: 'Emeric Switch',
          itemTitle: 'A Beginner\'s Guide to Transfiguration'
        };
        $scope.submitCourseReserve();
        expect($scope.formState).toBe(true);
      }])
    );
  });
});