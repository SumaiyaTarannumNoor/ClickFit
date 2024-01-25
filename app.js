$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll >150){
            $(".navbar").css("background", "#ffffff");
            $(".navbar").css("box-shadow", "rgba(0,0,0,0.1) 0px 4px 12px");
            $(".logo").css("color", "#175cff");
            $(".menus a").css("color", "#175cff");
            $(".logo:hover").css("color", "#002d97");
            $(".menus a:hover").css("color", "#071c4d");
            $(".signup:hover").css("color", "#175cff");
        }

        else{
            $(".navbar").css("background", "transparent");
            $(".navbar").css("box-shadow", "none");
            $(".logo").css("color", "#ffffff");
            $(".menus a").css("color", "#ffffff");
            $(".logo:hover").css("color", "#002d97");
            $(".menus a:hover").css("color", "#002d97");
            $(".signup:hover").css("color", "#071c4d");
        }
    });


    var navbarHeight = $(".navbar").outerHeight();
    $(".menus a").click(function(e){
        var targetHref = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(targetHref).offset().top-navbarHeight
        }, 1000)
        e.preventDefault();
    });


    const mobile = document.querySelector(".menu-toggle");
    const mobileLink = document.querySelector(".menus");

    mobile.addEventListener("click", function(){
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active");
    });

    mobileLink.addEventListener("click", function(){
        const menuBars = document.querySelector('.is-active');
        if(window.innerwidth <= 700 && menuBars){
            mobile.classList.toggle("is-active");
            mobileLink.classList.remove("active");
        }
    })
})