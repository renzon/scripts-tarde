angular.module('categoriaServicos', []).factory('CategoriaAPI', function () {
  return {};
});

QUnit.test('Controlador Categoria App', function (assert) {
  //angular.module('categoriaModulo', []);
  angular.module('categoria-app');

  var injector = angular.injector(['ng', 'categoria-app']);

  var $controller = injector.get('$controller');
  var $categoriaScope = {};
  $controller('CategoriaCtrl',
    {$scope: $categoriaScope});

  assert.equal(0, $categoriaScope.categorias.length, 'Não deveria ter elemento inicialmente')
  categoria = {id: 1, nome: 'Notebooks'};


  $categoriaScope.adicionarCategoria(categoria);
  assert.equal(1, $categoriaScope.categorias.length, 'Deveria ter um elemnto após adição');
  assert.equal(categoria, $categoriaScope.categorias[0], 'Elemento deveria ser igual ao adicionado')


});

QUnit.test('Controlador Categoria App', function (assert) {
  angular.module('categoriaModulo');

  var injector = angular.injector(['ng', 'categoriaModulo']);
  injector.invoke(function ($compile, $rootScope,$templateCache) {
    $templateCache.put('categoria-form.html','<a>Qualquer</a>')
    var el = angular.element('<categoria-form></categoria-form>');
    el=$compile(el)($rootScope);
    $rootScope.$digest();
    var isolatedScope = el.isolateScope();
    var scope = el.scope();
    assert.equal('Notebooks', isolatedScope.categoria.nome, 'Deveria ter nome inicial');
  });


});
