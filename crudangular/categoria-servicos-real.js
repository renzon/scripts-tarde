(function () {
  var categoriaServicos = angular.module('categoriaServicos', [])

  categoriaServicos.factory('CategoriaAPI', function ($rootScope, $http) {


    function extrairDados(f) {
      return function (resposta) {
        if (f !== undefined) {
          return f(resposta.data);
        }
      }
    }

    return {
      salvar: function (categoria, callbackSucesso, callbackErro, callbackAlways) {
        callbackSucesso = extrairDados(callbackSucesso);
        callbackErro = extrairDados(callbackErro);
        $http.post('http://localhost:8080/categorias/rest/new', categoria).then(
          callbackSucesso, callbackErro).finally(callbackAlways);
      },
      listar: function (callbackSucesso, callbackErro, callbackAlways) {
        callbackSucesso = extrairDados(callbackSucesso);
        callbackErro = extrairDados(callbackErro);
        $http.get('http://localhost:8080/categorias/rest').then(
          callbackSucesso, callbackErro).finally(callbackAlways);
      },

      editar: function (categoria, callbackSucesso, callbackErro, callbackAlways) {
        callbackSucesso = extrairDados(callbackSucesso);
        callbackErro = extrairDados(callbackErro);
        $http.post('http://localhost:8080/categorias/rest/edit', categoria).then(
          callbackSucesso, callbackErro).finally(callbackAlways);
      },

      deletar: function (id, callbackSucesso, callbackErro, callbackAlways) {
        callbackSucesso = extrairDados(callbackSucesso);
        callbackErro = extrairDados(callbackErro);
        $http.get('http://localhost:8080/categorias/rest/delete?id=' + id).then(
          callbackSucesso, callbackErro).finally(callbackAlways);
      }
    };
  });
})();