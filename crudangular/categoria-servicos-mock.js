(function () {
  var categoriaServicos = angular.module('categoriaServicos', [])

  categoriaServicos.factory('CategoriaAPI', function ($rootScope) {
    const delay = 2;

    return {
      salvar: function (categoria, callbackSucesso, callbackErro, callbackAlways) {

        console.log('Iniciando salvamento ');
        var id = 0;
        setTimeout(function () {
          id++;
          if (callbackSucesso && categoria.nome !== undefined) {
            var categoriaSalva = {
              'id': id,
              nome: categoria.nome,
              creation: '02/02/02 02:02:02'
            };
            callbackSucesso(categoriaSalva);
          } else if (callbackErro && categoria.nome === '') {
            callbackErro({nome: 'Campo Obrigatório'})
          }

          if (callbackAlways) {
            callbackAlways();
          }

          $rootScope.$digest();
        }, delay);

        console.log('Finalizando chamado do serviço');
      },
      listar: function (callbackSucesso, callbackErro, callbackAlways) {
        setTimeout(function () {
          if (callbackSucesso) {
            var categorias = [{
              'id': 1,
              nome: 'Notebooks',
              creation: '02/02/02 02:02:02'
            }, {
              'id': 2,
              nome: 'Tablets',
              creation: '03/03/03 02:02:02'
            }, {
              'id': 3,
              nome: 'Celulares',
              creation: '04/04/04 02:02:02'
            }];
            callbackSucesso(categorias);
          } else if (callbackErro && categoria.nome === '') {
            callbackErro({nome: 'Campo Obrigatório'})
          }

          if (callbackAlways) {
            callbackAlways();
          }

          $rootScope.$digest();
        }, delay);

        console.log('Finalizando chamado do serviço');
      },

      editar: function (categoria,callbackSucesso, callbackErro, callbackAlways) {
        setTimeout(function () {
          if (callbackSucesso) {

            callbackSucesso(categoria);
          } else if (callbackErro && categoria.nome === '') {
            callbackErro({nome: 'Campo Obrigatório'})
          }

          if (callbackAlways) {
            callbackAlways();
          }

          $rootScope.$digest();
        }, delay);

        console.log('Finalizando chamado do serviço');
      },

      deletar: function (id,callbackSucesso, callbackErro, callbackAlways) {
        setTimeout(function () {
          if (callbackSucesso) {

            callbackSucesso();
          } else if (callbackErro && categoria.nome === '') {
            callbackErro({nome: 'Campo Obrigatório'})
          }

          if (callbackAlways) {
            callbackAlways();
          }

          $rootScope.$digest();
        }, delay);

        console.log('Finalizando chamado do serviço');
      }
    };
  });
})();