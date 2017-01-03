var perspectiveNav = function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'angular_templates/perspective_nav.html',
    scope: {
      selectedPerspective: '=',
      perspectives: '='
    },
    controller: ['$scope', function($scope) {
      $scope.changeSelectedPerspective = function (perspective) {
        $scope.selectedPerspective = perspective;
      }
    }]
  };
}

appModule
  .directive('perspectiveNav', [perspectiveNav]);
