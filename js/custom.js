/* global $, console, alert */
$(document).ready(function () {
    
    //Nice Scroll
    $("html, body").niceScroll({
        scrollspeed: 100,
        cursorwidth: "20px"
    });
    
    // option color
    var colorLi = $(".option-color .list-color ul li")
    
    colorLi
    .eq(0).css("backgroundColor", "#a70000").end()
    .eq(1).css("backgroundColor", "#08bbc3").end()
    .eq(2).css("backgroundColor", "#0219bf").end()
    .eq(3).css("backgroundColor", "#def900")
    
    $(".option-color .fas").click(function () {
        $(".option-color .list-color").fadeToggle()
    })
    
    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr('data-color'))
    });
    
    
    // button Up
    $(window).scroll(function () {
        if($(this).scrollTop() >= 700){
            $(".button-up").fadeIn()
        } else {
            $(".button-up").fadeOut()
        }
    })
    
    $(".button-up").click(function () {
        $("html, body").animate({scrollTop : 0},1000)
    })
    
    // Loading Page
    $(window).load(function () {
        
        $(".Loading").fadeOut(1000)
        
        $("body").css("overflow", "auto")
    })
})