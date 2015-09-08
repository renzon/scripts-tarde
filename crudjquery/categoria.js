$(document).ready(function () {
  var $form=$('#form-categoria');

  $form.hide();

  $('#mostrar-form-botao').click(function(){
    $form.slideToggle();
  });


});



