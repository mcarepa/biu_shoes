var page = function() {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    templateUrl: 'angular_templates/page.html',
    scope: {
      innerClass: '@',
      dataAnchor: '@'
    }
  };
}

appModule
  .directive('page', [page]);
