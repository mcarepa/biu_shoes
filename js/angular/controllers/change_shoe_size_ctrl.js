var ChangeShoeSizeCtrl = function($scope, $rootScope) {
  $scope.shoeSizes = {
    value1: 35,
    value2: 36,
    value3: 37,
    value4: 38,
    value5: 39,
    value6: 40
  };
}

appModule
  .controller('ChangeShoeSizeCtrl', [
    '$scope', '$rootScope',
    ChangeShoeSizeCtrl
  ]);

