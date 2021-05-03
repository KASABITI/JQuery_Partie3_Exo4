$("#orange").click(function() {
  var colr = $(this).attr('id');
  $(".color").css("background-color", colr);
  console.log('Meryam');
});
$("#Width").click(function(){
  $(".color").width("+=10");
});
$("#Cacher").click(function(){
  $(".color").hide();
});
$("#Afficher").click(function(){
  $(".color").show();
});
$("#CouleurInitiale").click(function(){
  $(".color").css("background-color", "");
});
