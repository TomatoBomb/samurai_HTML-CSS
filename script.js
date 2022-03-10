$(function(){
    $(".box1 h2").click(function(){
        
        if($(".box1 .boxBody").hasClass("open")){
            $(".box1 .boxBody").removeClass("open");
            $(".box1 .boxBody").slideUp();
            $(".box1 h2 span").text("+");
        }
        else {
            $(".box1 .boxBody").addClass("open");
            $(".box1 .boxBody").slideDown();
            $(".box1 h2 span").text("-");
        }
    });

    $(".box2 h2").click(function(){
        
        if($(".box2 .boxBody").hasClass("open")){
            $(".box2 .boxBody").removeClass("open");
            $(".box2 .boxBody").slideUp();
            $(".box2 h2 span").text("+");
        }
        else {
            $(".box2 .boxBody").addClass("open");
            $(".box2 .boxBody").slideDown();
            $(".box2 h2 span").text("-");
        }
    });

























});