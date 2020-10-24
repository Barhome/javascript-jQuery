$("#icon-colors").click(function(){
    $("#color-options").toggle();
});

let lis=$("#options ul li");

lis.eq(0).css("backgroundColor","#09c");
lis.eq(1).css("backgroundColor","tomato");
lis.eq(2).css("backgroundColor","teal");
lis.eq(3).css("backgroundColor","tan");
lis.eq(4).css("backgroundColor","orange");

/*let colors=["#09c","tomato","teal","tan","orange"];

for(let i=0;i<lis.length;i++){

    lis.eq(i).css("backgroundColor",colors[i]);

}*/

lis.click(function(){
    let color=$(this).css("backgroundColor");
    $("h1,h2,h3,h4,h5,h6").css("color",color);
});

let imgs=$("#options img");

imgs.click(function(){
    let imageSrc= $(this).attr("src");
    $("#home").css("backgroundImage",`url(${imageSrc})`);
});


let profileOffset=$(".profile").offset().top;

$(window).scroll(function(){
    let scrollTop=$(window).scrollTop();
    if(scrollTop>profileOffset)
    {
        $(".profile").css("backgroundColor","#c9f");
        $("nav").css("backgroundColor","rgba(0,0,0,0.6");
    }
    else
    {
        $(".profile").css("backgroundColor","transparent");
        $("nav").css("backgroundColor","transparent")

    }
    if(scrollTop>$("nav").outerHeight())
    {
        $("nav").addClass("fixed-top");
    }

    if(scrollTop>800)
    {
        $("#btnUp").fadeIn(500);
    }
    else
    {
        $("#btnUp").fadeOut(500);

    }

});
$("#btnUp").click(function(){ 

    $("body,html").animate({scrollTop:0},1000);
    
});

/* $("a[href='#profile']").click(function(){  // static way , 

    let profileOffset=$("#profile").offset().top;
    $("body,html").animate({scrollTop:profileOffset},1000);

    window.onload=function(){  
    
    }waits for imgs to fully load
}) */


$("nav a").click(function(){// dynamic way , 
    let hrefValue=$(this).attr("href");
    let profileOffset=$(hrefValue).offset().top;
    $("body,html").animate({scrollTop:profileOffset},1000);

})

$(document).ready(function(){ //doesnt wait for images to fully load
            
    $("#loading").fadeOut(2000,function(){
        $("body").css("overflow", "auto");
    });

});




