$(document).ready(function () {
  var $formDiv=$('#form-categoria');
  var $formGroup=$('.form-group');
  var $formCategoria=$('#form-categoria');

  $formDiv.hide();

  $('#mostrar-form-botao').click(function(){
    $formDiv.slideToggle();
  });

  function limparMensagensDeErro(){
    $formGroup.removeClass('has-error');
  }

  $formCategoria.submit(function(evento){
    evento.preventDefault();
    limparMensagensDeErro();
  });


});



