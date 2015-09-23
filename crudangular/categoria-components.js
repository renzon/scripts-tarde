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
        $scope.salvandoCategoriaFlag=false;

        $scope.salvar = function(){
          $scope.erros={};
          $scope.salvandoCategoriaFlag=true;
          CategoriaAPI.salvar($scope.categoria, function(categoria){
            console.log(categoria);

          },function(erros){
            $scope.erros=erros;
          },function(){
            $scope.salvandoCategoriaFlag=false;
          });

        }

      }
    };
  });


  categoriaModulo.directive('categoriaTabela',
    function () {
      return {
        restric: 'E',
        templateUrl: 'categoria-tabela.html',
        replace: true,
        scope: {},
        controller: function ($scope, CategoriaAPI) {

        }
      };
    });
})();
