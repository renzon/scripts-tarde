$(document).ready(function () {
  var $formDiv=$('#form-categoria');
  var $formGroup=$('.form-group');
  var $formCategoria=$('#form-categoria');
  var $helpBlockSpam=$('span.help-block');

  $formDiv.hide();

  $('#mostrar-form-botao').click(function(){
    $formDiv.slideToggle();
  });

  function limparMensagensDeErro(){
    $formGroup.removeClass('has-error');
    $helpBlockSpam.text('');
  }

  $formCategoria.submit(function(evento){
    evento.preventDefault();
    limparMensagensDeErro();
  });


});



