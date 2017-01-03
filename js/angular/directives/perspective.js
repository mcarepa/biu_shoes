var perspective = function($rootScope, $timeout) {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    templateUrl: 'angular_templates/perspective.html',
    scope: {
      view: '=',
      allComponents: '=',
      selectedComponent: '='
    },
    controller: ['$scope', '$timeout', function($scope, $timeout) {
      $scope.selectedComponent = {};
      $scope.thisComponents = filterComponents($scope, $scope.allComponents);

      $scope.$watch('view', function(newVal, oldVal) {
        if (newVal) {
          $scope.thisComponents = filterComponents($scope, $scope.allComponents);
        }
      }, true);

      this.thisComponents = filterComponents($scope, $scope.allComponents);

      this.selectComponent = function(elm, components) {
        $scope.selectedComponent = _.where($rootScope.selectedShoe.components, {'name': $(elm).data('name')});
        $scope.selectedComponent = $scope.selectedComponent[0];
        $scope.$apply();
      }

      this.getSelectedComponent = function() {
        return $scope.selectedComponent;
      }

      this.resetSelectedComponent = function() {
        $scope.selectedComponent = {};
        $scope.$apply();
      }

      function filterComponents (scope, components) {
        var filteredComponents = [];

        angular.forEach(components, function(v,k) {
          _.find(v.perspectives, function(c) {
            if (c.name == scope.view.name ) {
              filteredComponents.push(v);
            }
          });
        });

        return filteredComponents;
      }
    }]
  };
};

var component = function($rootScope, $timeout) {
  return {
    restrict: 'E',
    replace: true,
    require: '^?perspective',
    templateUrl: 'angular_templates/component.html',
    scope: {
      view: '=',
      component: '=',
      selectedComponent: '='
    },
    link: function(scope, elm, attrs, ctrl) {
      scope.elmId = 'id-c-' + scope.component.name;
      scope.coords = thisCoords(scope.component, scope.view.name);
      scope.svgPath = thisSvgPath(scope.component, scope.view.name);
      scope.width = thisWidth(scope.component, scope.view.name);
      scope.zIndex = thisZIndex(scope.component, scope.view.name);

      scope.thisCoords = thisCoords;
      scope.thisSvgPath = thisSvgPath;
      scope.thisWidth = thisWidth;
      scope.toggleEdit = toggleEdit;

      $timeout (function() {
        var svgElm = document.getElementById(scope.elmId);
        var thisScope = scope;

        svgElm.addEventListener('load', function(evt){
          var svgDoc = svgElm.contentDocument;
          var svgItem = svgDoc.getElementById(scope.component.name);

          // Add click event to svg object
          $(svgItem).on('click', { component: thisScope.component, toggleEdit: thisScope.toggleEdit }, function(evt) {
            evt.data.toggleEdit(evt.data.component);
          });

          // Initialize svg object color
          $(svgItem).css('fill', thisScope.component.actualColor);

          // Add reference to stylesheet
          var linkElm = svgDoc.createElementNS("http://www.w3.org/1999/xhtml", "link");
          linkElm.setAttribute("href", "../../../../../stylesheets/styles.css");
          linkElm.setAttribute("type", "text/css");
          linkElm.setAttribute("rel", "stylesheet");
          $(svgDoc).children().append(linkElm);

          // Add css classes
          var insideGroup = getSVGGroup($(svgItem));
          insideGroup.attr('class', 'svg-path');
        },false);
      });

      function toggleEdit (elm) {
        $timeout(function() {
          var elmClass = '.svg-object.' + elm.name;
          $elm = $(elmClass);

          if ($elm.hasClass('selected')) {
            ctrl.resetSelectedComponent();
            $elm.removeClass('selected');
          } else {
            $('.svg-object').removeClass('selected');
            $elm.addClass('selected');
            ctrl.selectComponent(elmClass, ctrl.thisComponents);
          }
        });
      }

      function thisCoords(component, viewName) {
        var coords = _.where(component.perspectives, { name: viewName })[0].coords;
        return { x: coords[1] + 'px', y: coords[0] + 'px' };
      }

      function thisSvgPath(component, viewName) {
        return _.where(component.svgPaths, {viewName: viewName})[0].path;
      }

      function thisWidth(component, viewName) {
        return _.where(component.perspectives, {name: viewName })[0].width + 'px';
      }

      function thisZIndex(component, viewName) {
        return _.where(component.perspectives, {name: viewName })[0].zIndex;
      }

      function getSVGGroup(svgItem) {
        var svgGroup = (svgItem.find('g').length > 0) ? svgItem.find('g') : svgItem;
        return svgGroup;
      }

      scope.$watch('view', function(newVal, oldVal) {
        if (newVal) {
          scope.coords = scope.thisCoords(scope.component, scope.view.name);
          scope.svgPath = scope.thisSvgPath(scope.component, scope.view.name);
          scope.width = scope.thisWidth(scope.component, scope.view.name);
        }
      }, true);
    }
  };
}

appModule
  .directive('perspective', ['$rootScope', '$timeout', perspective])
  .directive('component', ['$rootScope', '$timeout', component]);
