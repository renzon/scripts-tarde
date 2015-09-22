(function(){
  var categoriaModulo = angular.module('categoriaModulo',[]);

  categoriaModulo.directive('categoriaForm',
  function(){
    return {
      restric: 'E',
      templateUrl: 'categoria-form.html',
      replace: true,
      scope:{},
      controller: function($scope){
        $scope.categoria={nome:'Notebooks'};

        $scope.salvar = function(){
          console.log($scope.categoria);
        }

      }
    };
  });
})();
