function f(){
  console.log('Execuntado f');

  return 'f';
}


function decorador(funcao){
  function calcularTempo(){
    console.log('Iniciando calcular Tempo');
    var tempoInicial=new Date();
    var retornoDeF=funcao.apply(funcao,arguments);
    var tempoFinal=new Date();
    var tempoFinalMs = tempoFinal.getTime();
    var tempoInicialMs = tempoInicial.getTime();
    console.log(tempoFinalMs- tempoInicialMs);
    console.log('Finalizando calcular Tempo');
    return retornoDeF;
  }

  return calcularTempo;

}

f=decorador(f);

function somar(a,b){
  console.log('Execuntado Soma');
  return a+b;
}

console.log(somar([1, 2]));

somar=decorador(somar);

console.log(f());
console.log(somar(2,3));