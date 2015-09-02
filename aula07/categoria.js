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

  $('.suicida').click(function () {
    $divSuicida.empty();
  });

  $('#btn-highlinder').click(function () {
    $divSuicida.append('<button id="btn-suicida" class="btn btn-danger suicida"> <i class="glyphicon glyphicon-trash"></i></button>');
  });


});



