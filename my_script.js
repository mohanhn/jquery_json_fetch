$("button").click(function(){
    $.getJSON("jason_data.jason",function(obj){
      $.each(obj, function(key, value){
        $("ul").append("<li>"+value.name+"<li>");
      });
    });
});
