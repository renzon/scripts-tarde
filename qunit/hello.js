$.ajax = function (options) {

  console.log(options);
  var xhrMock={success:function(f){
    this.successCallback=f
    return this;
  },error:function(f){
    this.errorCallback=f
    return this;
  },always:function(f){
    this.alwaysCallback=f
    return this;
  }};
  QUnit.test('Teste Listar', function (assert) {
    assert.equal(options.url, 'http://localhost:8080/categorias/rest', 'Deveria fazer chamada ajax nessa url');
    var $listarLoader = $('#listar-ajax-loader');
    assert.ok( $listarLoader.is(':visible'),'Deveria mostrar loader');
    xhrMock.alwaysCallback();
    var done = assert.async();
    setTimeout(function(){
      assert.ok( !$listarLoader.is(':visible'),'Deveria esconder loader');
      done();

    },1000); // esperando chamada assíncrona

    var $tabela=$('#tabela-categoria');
    assert.strictEqual(0, $tabela.children().length,'Não deve ter categorias antes da chamada ajax');

    var categorias = [{id:1,nome:'Notebook', creation:'02/02/02 02:02:02'}];
    xhrMock.successCallback(categorias);

    assert.equal(categorias.length, $tabela.children().length,'Deveria acrescentar '+categorias.length+' categorias na tabela');

  });
  return xhrMock;


};



