$(document).ready(function(){
  $("#first").hide();
    $("#firstB").click(function(){
      $("#first").slideToggle('slow');
    });
  $("#first").mouseleave(function(){
    $("#first").slideUp('slow');
  });
  $("#second").hide();
    $("#secondB").click(function(){
      $("#second").slideToggle('slow');
    });    
  $("#second").mouseleave(function(){
    $("#second").slideUp('slow');  
  }); 
  $("#third").hide();
    $("#thirdB").click(function(){
      $("#third").slideToggle('slow');
  });  
  $("#third").mouseleave(function(){
    $("#third").slideUp('slow');
  });  
});

