(function(){
  var categoriaModulo = angular.module('categoriaModulo',[]);

  categoriaModulo.directive('categoriaForm',
  function(){
    return {
      restric: 'E',
      templateUrl: 'categoria-form.html',
      replace: true
    };
  });
})();
