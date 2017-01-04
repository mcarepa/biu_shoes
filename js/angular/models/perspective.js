(function(){
  "use strict";

  var Perspective = function() {
    function Perspective (name) {
      this.name = name;
      this.components = [];

      this.linkComponent = function (component_name, svgPath) {
        this.components.push = {
          component_name: name,
          svgPath: svgPath
        };
      };

      this.buildBgPath = function (shoeModel, viewName) {
        this.bgPath = 'images/shoes/' + shoeModel + '/' + viewName + '/view.png';
      }
    }

    return Perspective;
  };

  appModule
    .factory('Perspective', [Perspective])
})();
