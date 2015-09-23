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
        $scope.categoriaSalva={}

        $scope.salvar = function(){
          CategoriaAPI.salvar($scope.categoria, function(categoria){
            $scope.categoriaSalva=categoria;
            console.log(categoria);

          });

        }

      }
    };
  });
})();
