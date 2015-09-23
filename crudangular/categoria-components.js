(function(){
  var categoriaModulo = angular.module('categoriaModulo',['categoriaServicos']);

  categoriaModulo.directive('categoriaForm',
  function(){
    return {
      restric: 'E',
      templateUrl: 'categoria-form.html',
      replace: true,
      scope:{},
      controller: function($scope, CategoriaAPI){
        $scope.categoria={nome:'Notebooks'};
        $scope.erros={};

        $scope.salvar = function(){
          $scope.erros={};
          CategoriaAPI.salvar($scope.categoria, function(categoria){
            console.log(categoria);

          },function(erros){
            $scope.erros=erros;
          });

        }

      }
    };
  });
})();
