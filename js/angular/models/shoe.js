var Shoe = function (Component, Perspective) {
  function Shoe (model, size) {
    this.model = model;
    this.size = size;
    this.components = [];
    this.views = [];

    this.addComponent = function (name, perspective, actualColor, availableColors) {
      var component = new Component(name, perspective, actualColor, availableColors);

      angular.forEach(perspective, function(p, i) {
        component.buildViewSvgPath(this.model, name, p.name);
      }, this);

      this.components.push(component);
    };

    this.addPerspective = function (name) {
      var perspective = new Perspective(name);
      perspective.buildBgPath(this.model, name);

      this.views.push(perspective);
    };
  }

  return Shoe;
};

appModule
  .factory('Shoe', ['Component', 'Perspective', Shoe]);
