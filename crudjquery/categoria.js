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
    linhaTabela += '<img hidden="hidden" src="../img/ajax-loader.gif" />';
    linhaTabela += '</td></tr>';
    var $linha = $(linhaTabela);
    var $ajaxLoader=$linha.find('img');
    var $botao = $linha.find('button');
    $botao.click(function () {
      $botao.hide();
      $ajaxLoader.fadeIn();
      $.post('http://localhost:8080/categorias/rest/delete',{id:categoria.id}).success(function(){
        $linha.remove();
      }).error(function(){
        $botao.fadeIn();
        $ajaxLoader.hide();
        alert('Não foi possível apagar no momento');
      });

    });


    $tabelaCategoria.prepend($linha);
    $inputNome.val('');
  }

  function listarCategorias(categorias) {
    $.each(categorias, function (index, cat) {
      adicionarCategoria(cat);
    });
  }
  $formCategoria.submit(function (evento) {
    evento.preventDefault();
    limparMensagensDeErro();
    var nome = $inputNome.val();
    $.post('http://localhost:8080/categorias/rest/new',{'nome':nome}).success(
      function(categoria){
        adicionarCategoria(categoria);
        $inputNome.val('')
      }).error(function(evento){
        mostrarErros(evento.responseJSON);
      });
  });


  // Listando Categorias com Ajax
  $listarAjaxLoader.slideDown();

  $.get('http://localhost:8080/categorias/rest').success(
    listarCategorias
  ).error(function () {
      alert('Deu pau');
    }).always(function(){
      $listarAjaxLoader.slideUp();
    });
});




