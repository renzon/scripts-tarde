var f = function f() {
  console.log('Executando F');
};

var g = f;

f = 1;
g();

function h(fcn) {
  console.log('Execuntando H');
  function j() {
    console.log('Execuntando J');
    fcn();
  };
  return j;
}

var jExterna=h(g);


function outraFuncao(){
  console.log('Outra');
}
outraFuncao=h(outraFuncao);


outraFuncao();
jExterna();




