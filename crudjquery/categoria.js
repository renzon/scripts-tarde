$(document).ready(function () {
  var $formDiv = $('#form-div');
  var $formGroup = $('.form-group');
  var $formCategoria = $('#form-categoria');
  var $helpBlockSpam = $('span.help-block');
  var $inputNome = $('#input-nome');

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

  $formCategoria.submit(function (evento) {
    evento.preventDefault();
    limparMensagensDeErro();
    if ($inputNome.val() === '') {
      mostrarErros({
        'nome': 'Campo Obrigatório',
        'idade': 'idade Obrigatória'
      });
    }

  });


});



