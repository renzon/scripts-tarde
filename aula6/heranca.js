function Pessoa(nome) {
  this.nome = nome || 'Renzo';
}

var pessoaPrototype = {
  cumprimentar: function () {
    throw 'Deve ser implementado';
  }
};
Pessoa.prototype = pessoaPrototype;

function Homem(nome, idade) {
  Pessoa.call(this, nome);
  if (idade === undefined || idade === 0) {
    idade = 18;
  }
  this.idade = idade;
}

var homemPrototipo = {
  cumprimentar: function () {
    return 'Olá, meu nome é ' + this.nome + '. Aperto de mão.'
  }
};
homemPrototipo.prototype = Pessoa.prototype;
Homem.prototype = homemPrototipo;

var renzo = new Homem();
var dante = new Pessoa('Dante');
console.log(renzo.cumprimentar());
console.log(dante.cumprimentar());


//function Pessoa2(nome) {
//  return {
//    'nome': nome || 'Renzo',
//    cumprimentar: function () {
//      return 'Olá, meu nome é ' + this.nome;
//    }
//  }
//
//}
//var marcela = Pessoa2('Marcela');
//
//var lalesca = Pessoa2('Lalesca');
//console.log(marcela.cumprimentar());
//console.log(lalesca.cumprimentar());
