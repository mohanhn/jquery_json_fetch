$("button").click(function(){
    $.getJSON("jason_data.json",function(obj){
      $.each(obj, function(key, value){
        $("#name").append("<li>"+value.name+"<li>");
        $("#age").append("<li>"+value.age+"<li>");
      });
    });
});
