(function(){
  var categoriaServicos= angular.module('categoriaServicos',[])

  categoriaServicos.factory('CategoriaAPI',function(){
    return {
      salvar: function(categoria){
        console.log('Salvando Categoria ');
        console.log(categoria);
      }
    };
  });
})();