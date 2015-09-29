(function () {
  var categoriaModulo = angular.module('categoriaModulo', ['categoriaServicos']);

  categoriaModulo.directive('categoriaForm',
    function () {
      return {
        restric: 'E',
        templateUrl: 'categoria-form.html',
        replace: true,
        scope: {
          salvarCategoria:'&'
        },
        controller: function ($scope, CategoriaAPI) {
          $scope.categoria = {nome: 'Notebooks'};
          $scope.erros = {};
          $scope.salvandoCategoriaFlag = false;

          $scope.salvar = function () {
            $scope.erros = {};
            $scope.salvandoCategoriaFlag = true;
            CategoriaAPI.salvar($scope.categoria, function (categoria) {
              $scope.salvarCategoria({'categoria':categoria});

            }, function (erros) {
              $scope.erros = erros;
            }, function () {
              $scope.salvandoCategoriaFlag = false;
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
        scope: {
          categorias:'='
        },
        controller: function ($scope, CategoriaAPI) {
          $scope.carregandoCategoriasFlag = true;

          CategoriaAPI.listar(function (categorias) {
            $.each(categorias, function (index, cat) {
              $scope.categorias.push(cat);
            });
          }, function () {

          }, function () {
            $scope.carregandoCategoriasFlag = false;
          });

          $scope.removerLinha=function(index){
            $scope.categorias.splice(index, 1);
          };


        }
      };
    });


  categoriaModulo.directive('categoriaLinha',
    function () {
      return {
        restric: 'A',
        templateUrl: 'categoria-linha.html',
        replace: true,
        scope: {
          categoria:'=',
          categoriaDeletadaListener : '&'
        },
        controller: function ($scope, CategoriaAPI) {
          $scope.modoEdicalFlag=false;
          $scope.categoriaParaEdicao={};

          $scope.entrarNoModoDeEdicao=function(){
             $scope.modoEdicalFlag=true;
            $scope.categoriaParaEdicao.nome=$scope.categoria.nome;
          };

          $scope.sairNoModoDeEdicao=function(){
             $scope.modoEdicalFlag=false;
          };

          $scope.editar=function(){
            CategoriaAPI.editar($scope.categoriaParaEdicao,
            function(categoriaEditada){
              $scope.categoria.nome=categoriaEditada.nome;
              $scope.sairNoModoDeEdicao();
            })
          };

          $scope.deletar=function(){
            CategoriaAPI.deletar($scope.id,
              function(){
                $scope.categoriaDeletadaListener();

              }
            );
          }


        }
      };
    });
})();
