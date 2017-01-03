var ChangeShoeModelCtrl = function($scope, $rootScope) {
  $scope.shoeModelImgPath = "images/shoes/" + $rootScope.selectedShoe.model + "/model_bg.png";
  $scope.selectedShoe = {};
  $scope.selectedShoe.model = $rootScope.selectedShoe.model;

  $scope.shoeModels = [
    { value: 'julia', label: 'Júlia' },
    { value: 'catarina', label: 'Catarina' },
    { value: 'margarida', label: 'Margarida' }
  ];

  $scope.$watch('selectedShoe.model', function(newVal, oldVal) {
    if (newVal) {
      $rootScope.selectedShoe = _.where($rootScope.shoes, {model: newVal})[0];
      $scope.shoeModelImgPath = "images/shoes/" + newVal + "/side_left/view.png";
    }
  });
}

appModule
  .controller('ChangeShoeModelCtrl', [
    '$scope', '$rootScope',
    ChangeShoeModelCtrl
  ]);
