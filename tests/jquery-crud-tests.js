var urlGlobal;
var xhrGlobal;

$.get = function (url) {
  urlGlobal = url
  console.log(url);
  var xhr = {
    success: function (funcao) {
      this.listarCategorias = funcao;
      return xhr
    }, error: function (funcao) {
      this.errorCallback = funcao;
      return xhr
    }, always: function (funcao) {
      this.alwaysCallback = funcao;
      return xhr
    }
  };

  xhrGlobal = xhr;

  return xhr;
};

QUnit.test('Teste de Chamada Listar', function (assert) {
  assert.strictEqual('http://localhost:8080/categorias/rest', urlGlobal, 'Chamada à url correta');

  var $tabelaCategoria = $('#tabela-categoria');
  assert.strictEqual(0, $tabelaCategoria.children().length, 'Tabela não possui linhas no início da chamada');

  var categorias = [{id: 1, nome: 'Notebooks', creation: '02/02/02 02:02:02'},
    {id: 2, nome: 'Tablets', creation: '03/03/03 03:03:03'}];

  xhrGlobal.listarCategorias(categorias);

  assert.strictEqual(2, $tabelaCategoria.children().length, 'Tabela possui 2 linhas após chamada');

});
