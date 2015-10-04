$('.button').click(function(){
  $('#modal').css('display','block');
  $('.modal-bg').fadeIn();
});

$('#close').click(function(){
  $('.modal-bg').fadeOut();
  $('#modal').fadeOut();
  return false;
});
