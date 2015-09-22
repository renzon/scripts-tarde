(function () {
  var categoriaApp = angular.module('categoria-app', []);

  var categoriaControler = categoriaApp.controller('CategoriaCtrl',
    function ($scope) {
      $scope.nome = 'Renzo';
    });
})();