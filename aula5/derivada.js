function derivar(funcao) {
  var deltaX = 0.00000000001;

  function derivada(x) {
    return (funcao(x + deltaX) - funcao(x)) / deltaX;
  }

  return derivada;
}

function reta(x){
  return x
}

var derivada_reta=derivar(reta);

console.log(derivada_reta(1));
console.log(derivada_reta(2));


function parabola(x){
  return x*x;
}
var derivada_parabola=derivar(parabola);


console.log(derivada_parabola(1));
console.log(derivada_parabola(3));


