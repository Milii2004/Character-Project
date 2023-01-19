var counter = 0;

$(".page-1, .page-2, .page-3, .page-4, .retry").hide();

$(".submit").click(function() { 
    
    var all = $(".user-desperation-input").val();
    
    counter += 1;
    $(".counter1").text("The quiz has been taken " + counter + " times");
    console.log(counter);
    var level = Number($(".user-desperation-input").val());
    var type = $(".user-personality-input").val();
    $(".new").text("You are at level " + level + " desperate to win this game. And your personality is " + type + ".");
    console.log(counter);

    
    if(level  >=1 &&  level  <= 2 && type === "loyal")     
    {
        $(".page-1").show();
        $(".page-2, .page-3, .page-4, .homepage").hide();
    }
    
    else if (level  >=3 &&  level  <= 4 && type === "loyal")    
    {
        $(".page-2").show();
        $(".page-1, .page-3, .page-4, .homepage").hide();
    }
    
    else if (level  >=5 &&  level <= 7 && type === "disloyalty")        
    {
        $(".page-3").show();
        $(".page-2, .page-1, .page-4, .homepage").hide();
    }
    
    else if (level  >=8 &&  level  <= 10 && type === "disloyalty")      
    {
        $(".page-4").show();
        $(".page-2, .page-3, .page-1, .homepage").hide();
    }
    
    else {
        alert("No chracter matched");
    }
    
    $(".retry").show();
});

$(".retry").dblclick(function() {
    $(".homepage").show();
    $(".page-1, .page-2, .page-3, .page-4, .retry" ).hide();
    
    
});
