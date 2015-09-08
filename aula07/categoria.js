$(document).ready(function () {
  var $txtArea = $('#txt-area');

  $('#btn-show').click(function () {
    $txtArea.fadeIn();
  });

  $('#btn-hide').click(function () {
    $txtArea.slideUp();
  });

  $('#btn-toggle').click(function () {
    $txtArea.slideToggle();
  });


  var $divSuicida = $('#div-suicida');
  var contador=0;
  function removerBotoes() {
    $divSuicida.empty();
    contador+=1;
    console.log(contador);
  }
  $('.suicida').click(removerBotoes);

  $('#btn-highlinder').click(function () {
    var $btn=$('<button id="btn-suicida" class="btn btn-danger suicida"> <i class="glyphicon glyphicon-trash"></i></button>');
    $btn.click(removerBotoes);
    $divSuicida.append($btn);
  });


});



