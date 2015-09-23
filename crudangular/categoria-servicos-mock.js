(function () {
  var categoriaServicos = angular.module('categoriaServicos', [])

  categoriaServicos.factory('CategoriaAPI', function ($rootScope) {
    return {
      salvar: function (categoria, callbackSucesso) {
        console.log('Iniciando salvamento ');

        const delay = 2000;
        var id = 0;
        setTimeout(function () {
          id++;
          if (callbackSucesso) {
            var categoriaSalva = {
              'id': id,
              nome: categoria.nome,
              creation: '02/02/02 02:02:02'
            }
            callbackSucesso(categoriaSalva);
          }
          $rootScope.$digest();
        }, delay);

        console.log('Finalizando chamado do serviço');
      }
    };
  });
})();