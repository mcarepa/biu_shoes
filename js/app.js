var appModule = angular.module('ShoeCustomizer', []);

var MainController = function($scope, $rootScope, Shoe) {
  // 1º - Initialize shoes
  var shoe_julia = new Shoe('julia');
  var shoe_catarina = new Shoe('catarina');
  var shoe_margarida = new Shoe('margarida');

  var defaultAvailableColors = ['#ff1493', '#ff2e47', '#ff8026', '#fff326', '#4fdd1d', '#1dc4dd'];

  // 2º - Add Components to shoes
  //////////////////////////////
  ////// Julia Components //////
  //////////////////////////////
  shoe_julia.addComponent('gaspea',
    [
      {name: 'side_left', coords: [125, 96.5], width: 174.2, zIndex: 2},
      {name: 'front', coords: [99.8*2, 24*2+22], width: 210.6, zIndex: 2},
      {name: 'side_right', coords: [150.9*2, 35.9*2+20], width: 182.2, zIndex: 2},
    ],
    '#ff1493', defaultAvailableColors
  );

  shoe_julia.addComponent('meio',
    [
      {name: 'side_left', coords: [273,95], width: 158.5, zIndex: 1},
      {name: 'front', coords: [108.5*2, 24.4*2+21], width: 159.8, zIndex: 1},
      {name: 'side_right', coords: [69.4*2, 7.2*2+20], width: 187, zIndex: 1},
    ],
    '#ff1493', defaultAvailableColors
  );

  shoe_julia.addComponent('tira',
    [
      {name: 'side_left', coords: [372,24.5], width: 100, zIndex: 3},
      {name: 'front', coords: [108.5*2, 1*2+20], width: 142, zIndex: 3},
      {name: 'side_right', coords: [69*2, 7.2*2+20], width: 113.2, zIndex: 3},
    ],
    '#ff1493', defaultAvailableColors
  );


  /////////////////////////////
  //// Catarina Components ////
  /////////////////////////////
  shoe_catarina.addComponent('gaspea',
    [
      {name: 'side_left', coords: [109, 51+20], width: 256.6, zIndex: 2},
      {name: 'side_right', coords: [255, 48+20], width: 254, zIndex: 2},
    ],
    '#ff1493', defaultAvailableColors
  );

  shoe_catarina.addComponent('tira',
    [
      {name: 'side_left', coords: [291, 60+20], width: 201.6, zIndex: 3},
      {name: 'side_right', coords: [178, 51.6+20], width: 153.7, zIndex: 3},
    ],
    '#ff1493', defaultAvailableColors
  );

  shoe_catarina.addComponent('contraforte',
    [
      {name: 'side_left', coords: [386, 6+20], width: 119, zIndex: 1},
      {name: 'side_right', coords: [90, 1+20], width: 124.7, zIndex: 1},
    ],
    '#ff1493', defaultAvailableColors
  );


  ///////////////////////////////
  //// Margarida Components /////
  //////////////////////////////
  shoe_margarida.addComponent('gaspea',
    [
      {name: 'side_left', coords: [31, 25.4+20], width: 270.9, zIndex: 3},
      {name: 'front', coords: [81.3, 3.7+20], width: 335.3, zIndex: 3},
      {name: 'side_right', coords: [289.5, 17.3+20], width: 282.5, zIndex: 3},
    ],
    '#ff2e47', defaultAvailableColors
  );

  shoe_margarida.addComponent('tira',
    [
      {name: 'side_left', coords: [252.5, 25.4+20], width: 149.4, zIndex: 4},
      {name: 'front', coords: [315, 11+20], width: 142, zIndex: 4},
      {name: 'side_right', coords: [172.2, 22+20], width: 155.5, zIndex: 4},
    ],
    '#ff1493', defaultAvailableColors
  );

  shoe_margarida.addComponent('contraforte',
    [
      {name: 'side_left', coords: [364.9, 1+20], width: 194.7, zIndex: 2},
      {name: 'front', coords: [335.4, 3+20], width: 180.6, zIndex: 2},
      {name: 'side_right', coords: [12, 5+20], width: 247.6, zIndex: 2},
    ],
    '#ff1493', defaultAvailableColors
  );

  shoe_margarida.addComponent('palmilha',
    [
      {name: 'side_left', coords: [101.6, 144.5+20], width: 356.6, zIndex: 1},
      {name: 'front', coords: [253.3, 105.9+20], width: 237.3, zIndex: 1},
      {name: 'side_right', coords: [119.2, 148.5+20], width: 361.4, zIndex: 1},
    ],
    '#ff8026', defaultAvailableColors
  );

  // 3º - Add perspectives to shoes
  shoe_julia.addPerspective('side_left');
  shoe_julia.addPerspective('side_right');
  shoe_julia.addPerspective('front');

  shoe_catarina.addPerspective('side_left');
  shoe_catarina.addPerspective('side_right');

  shoe_margarida.addPerspective('side_left');
  shoe_margarida.addPerspective('side_right');
  shoe_margarida.addPerspective('front');

  // Initialize Global Variables
  $rootScope.shoes = [shoe_julia, shoe_catarina, shoe_margarida];
  $rootScope.selectedShoe = $rootScope.shoes[0];
}

appModule
  .controller('MainController', [
    '$scope', '$rootScope', 'Shoe',
    MainController
  ]);
