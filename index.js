$(document).ready(function(){
  $("#a").click(function(){
    var x=$("#x1").val();
    var y=$("#x2").val();
    var ans= parseInt(x)+parseInt(y);
    console.log(ans);
   $('#res').val(ans);
  });
  
  $("#s").click(function(){
    var x=$("#x1").val();
    var y=$("#x2").val();
    var ans= parseInt(x)-parseInt(y);
   $('#res').val(ans);
  });
  $("#m").click(function(){
    var x=$("#x1").val();
    var y=$("#x2").val();
    var ans= parseInt(x)*parseInt(y);
   $('#res').val(ans);
  });
  $("#d").click(function(){
    var x=$("#x1").val();
    var y=$("#x2").val();
    var ans= parseInt(x)/parseInt(y);
   $('#res').val(ans);
  });
  
});