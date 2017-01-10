var fullpage = function($timeout) {
  return {
    restrict: 'A',
    link: function(scope, elm) {
      $timeout (function() {
        $(elm).fullpage({
          menu: "#full-page-menu",
          anchors:['modelPage', 'colorPage', 'sizePage', 'myShoePage']
        });
      });
    }
  };
};

appModule
  .directive('fullpage', ['$timeout', fullpage]);
