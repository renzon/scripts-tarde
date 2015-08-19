function f(x, y) {
  if(y===undefined){
    y=4;
  }
  var m = 'Foo';
  console.log(m + 'Blah');
  var lista = ['Junio', 'Joao'];
  lista.push('Marcela');
  lista.unshift('Renzo');
  lista.splice(0, 2);
  for (var i=0; i< lista.length;++i) {
    console.log(lista[i]);
  }
  console.log('X:'+x);
  console.log('Y:'+y);
  console.log(arguments);
  return x*x+y*y;
}

console.log(0 == '0');
console.log(0 === '0');
console.log(null == undefined);
console.log(null === undefined);
console.log(null == '');

console.log(f(2, 3));
console.log(f());
console.log(f(1,2,3,4));

var obj ={'nome':'Renzo',sobrenome:'Nuccitelli', a:[1,2,3], 1:3};
console.log(obj);
console.log(obj.nome);
console.log(obj[1]);
console.log(obj['sobrenome']);
