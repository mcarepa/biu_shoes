'use strict';

var Component = function () {
  function Component(name, perspectives, actualColor, availableColors) {
    this.name = name;
    this.perspectives = perspectives;
    this.actualColor = actualColor;
    this.availableColors = availableColors;
    this.svgPaths = [];

    this.updateColor = function (color) {
      this.actualColor = color;
    };

    this.buildViewSvgPath = function (shoeModel, compName, viewName) {
      var svgObj = {
        viewName: viewName,
        path: 'images/shoes/' + shoeModel + '/' + viewName + '/components/' + compName + '.svg'
      };

      this.svgPaths.push(svgObj);
    };
  }

  return Component;
};

appModule
  .factory('Component', [Component]);

