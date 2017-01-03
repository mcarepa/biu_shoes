var ChangeShoeColorCtrl = function($scope, $rootScope, Components, Component) {
  $scope.selectedView = $rootScope.selectedShoe.views[0];
  $scope.selectedComponent = {};
  $scope.updateComponentColor = updateComponentColor;
  $scope.selectComponentSVG = selectComponentSVG;

  $rootScope.$watch('selectedShoe', function(newVal, oldVal) {
    if(newVal) {
      $scope.selectedView = $rootScope.selectedShoe.views[0];
    }
  });

  function updateComponentColor (color) {
    var component = _.where($rootScope.selectedShoe.components, $scope.selectedComponent)[0];
    var svg = $scope.selectComponentSVG(component);
    component.actualColor = color;
    svg.css('fill', component.actualColor);
  }

  function selectComponentSVG (component) {
    var elmId ='id-c-' + component.name;
    var svg = document.getElementById(elmId);
    var svgDoc = svg.contentDocument;
    var svgItem = svgDoc.getElementById(component.name);
    return $(svgItem);
  }
}

appModule
  .controller('ChangeShoeColorCtrl', [
    '$scope', '$rootScope', 'Components', 'Component',
    ChangeShoeColorCtrl
  ]);
