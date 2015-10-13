QUnit.test( "hello test", function( assert ) {
  assert.equal( 1 , '1', "Valores Devem ser iguais!" );
});

QUnit.test( "Outro Teste", function( assert ) {
  assert.strictEqual( 1 , '1', "São de tipos diferentes!" );
});