var onloadClass = function($window) {
  return {
    restrict: 'A',
    link: function(scope, elm, attrs) {
      elm.addClass('loading');

      angular.element($window).bind('load', function() {
        elm.removeClass('loading');
      });
    }
  };
}

appModule
  .directive('onloadClass', ['$window', onloadClass]);
