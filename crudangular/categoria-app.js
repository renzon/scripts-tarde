(function () {
  var categoriaApp = angular.module('categoria-app', ['categoriaModulo']);

  categoriaApp.config(['$httpProvider', function ($httpProvider) {
    //Reset headers to avoid OPTIONS request (aka preflight)
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*'};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
  }]);

  var categoriaControler = categoriaApp.controller('CategoriaCtrl',
    function ($scope) {
      $scope.categorias = [];

      $scope.adicionarCategoria = function (categoria) {
        $scope.categorias.unshift(categoria);
      }


    });
})();