(function () {
  var categoriaApp = angular.module('categoria-app', ['categoriaModulo']);

  var categoriaControler = categoriaApp.controller('CategoriaCtrl',
    function ($scope) {
      $scope.categorias = [];

      $scope.adicionarCategoria = function (categoria) {
        $scope.categorias.unshift(categoria);
      }


    });
})();