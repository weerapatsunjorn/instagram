$(function () {
    $("#hello").click(function(){
        console.log("Hello, jQuery");
        $("#name").addClass("display-1");

        $("#photo").attr("src","images/pak.jpg")

        
    });

    $("#getdom").click(function(){
        var name  = $("#name").html();
        console.log(name);
        
    });

    $("#setdom").click(function(){
        $("#name").html("Pakkung");
        
        
    });

    $("#addhobby").click(function(){
        var newhobby  = $("#newhobby").val();
        $("#hobby").append("<li>" + newhobby + "</li>");
        $("#newhobby").val("");
        
    });

    $("#clear").click(function(){
        $("#hobby").empty("");   
    });


});