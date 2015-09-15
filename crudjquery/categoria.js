$(document).ready(function () {
  var $formDiv = $('#form-div');
  var $formGroup = $('.form-group');
  var $formCategoria = $('#form-categoria');
  var $helpBlockSpam = $('span.help-block');
  var $inputNome = $('#input-nome');
  var $tabelaCategoria = $('#tabela-categoria');
  var $listarAjaxLoader = $('#listar-ajax-loader');

  $formDiv.hide();

  $('#mostrar-form-botao').click(function () {
    $formDiv.slideToggle();
  });

  function limparMensagensDeErro() {
    $formGroup.removeClass('has-error');
    $helpBlockSpam.text('');
  }

  function mostrarErros(erros) {
    var spanHelpPrefixo = '#span-help-';
    var formGroupPrefixo = '#form-group-';

    $.each(erros, function (propriedade, msg) {
      $(spanHelpPrefixo + propriedade).text(msg);
      $(formGroupPrefixo + propriedade).addClass('has-error');
    });
  }

  function adicionarCategoria(categoria) {
    var linhaTabela = '<tr>';
    linhaTabela += '<td>' + categoria.id + '</td>';
    linhaTabela += '<td>' + categoria.creation + '</td>';
    linhaTabela += '<td>' + categoria.nome + '</td>';
    linhaTabela += '<td>';

    linhaTabela += '<button class="btn btn-danger btn-sm"><i class="glyphicon glyphicon-trash"></i></button>';
    linhaTabela += '</td></tr>';
    var $linha=$(linhaTabela);
    $linha.find('button').click(function(){
      console.log('Apagando categoria com id '+ categoria.id);
      $linha.remove();
    });


    $tabelaCategoria.prepend($linha);
    $inputNome.val('');
  }

  function listarCategorias(categorias) {
    $.each(categorias,function(index, cat){
      adicionarCategoria(cat);
    });
    $listarAjaxLoader.slideUp();
  }


  $formCategoria.submit(function (evento) {
    evento.preventDefault();
    limparMensagensDeErro();
    var nome = $inputNome.val();
    if (nome === '') {
      mostrarErros({
        'nome': 'Campo Obrigatório',
        'idade': 'idade Obrigatória'
      });
    } else {
      adicionarCategoria({
        "nome": nome,
        "id": 5910974510923776,
        "creation": "09/08/2015 16:44:20"
      });
    }

  });

  // Listando Categorias com Ajax
  $listarAjaxLoader.slideDown();
  $.get('http://localhost:8080/categorias/rest').success(listarCategorias);
});



