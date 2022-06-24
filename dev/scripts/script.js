// below are for hamburger button event listener
const menu = document.querySelector("#main-navigation");
const hamburger= document.querySelector(".hamburger-menu");
function toggleMenu(e) {
    e.preventDefault();
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  } else {
    menu.classList.add("showMenu");
  }
}
hamburger.addEventListener("click", toggleMenu);

//below are for scrolling icons animation contorl===============
const icon1Span = document.querySelector(".icon1");
const icon1 = document.querySelector(".top1");
const icon4 = document.querySelector(".bottom1");
const icon2Span = document.querySelector(".icon2");
const icon2 = document.querySelector(".top2");
const icon5 = document.querySelector(".bottom2");
const icon3Span = document.querySelector(".icon3");
const icon3 = document.querySelector(".top3");
const icon6 = document.querySelector(".bottom3");
function Icon4MoveIn(e){
    icon1.style.transform= "translateY(-36.36px)";
    icon4.style.transform= "translateY(-36.36px)";
}
function Icon4MoveOut(e){
    icon1.style.transform= "translateY(0)";
    icon4.style.transform= "translateY(0)";
}
function Icon5MoveIn(e){
    icon2.style.transform= "translateY(-36.36px)";
    icon5.style.transform= "translateY(-36.36px)";
}
function Icon5MoveOut(e){
    icon2.style.transform= "translateY(0)";
    icon5.style.transform= "translateY(0)";
}
function Icon6MoveIn(e){
    icon3.style.transform= "translateY(-36.36px)";
    icon6.style.transform= "translateY(-36.36px)";
}
function Icon6MoveOut(e){
    icon3.style.transform= "translateY(0)";
    icon6.style.transform= "translateY(0)";
}
icon1Span.addEventListener("mouseover", Icon4MoveIn);
icon1Span.addEventListener("mouseout", Icon4MoveOut);
icon2Span.addEventListener("mouseover", Icon5MoveIn);
icon2Span.addEventListener("mouseout", Icon5MoveOut);
icon3Span.addEventListener("mouseover", Icon6MoveIn);
icon3Span.addEventListener("mouseout", Icon6MoveOut);
//below are for screen control starting at 500px==========================
const mediaQueryList500 = window.matchMedia("(min-width: 500px)");
function handleScreenChange500(mql) {
    if(mql.matches){
        $("#btn-menu").after($(".search-container"));
        $("#btn-menu").hide();
        menu.classList.remove("showMenu");
        $("#main-navigation").show();
        $(".brand-icons").hide();
        icon1Span.removeEventListener("mouseover", Icon4MoveIn);
        icon1Span.removeEventListener("mouseout", Icon4MoveOut);
        icon2Span.removeEventListener("mouseover", Icon5MoveIn);
        icon2Span.removeEventListener("mouseout", Icon5MoveOut);
        icon3Span.removeEventListener("mouseover", Icon6MoveIn);
        icon3Span.removeEventListener("mouseout", Icon6MoveOut);
    }else{
        $("#main-navigation").prepend($(".search-container"));
        $("#main-navigation").append($(".brand-icons"));
        $("#btn-menu").show();
        $(".brand-icons").show();
        icon1Span.addEventListener("mouseover", Icon4MoveIn);
        icon1Span.addEventListener("mouseout", Icon4MoveOut);
        icon2Span.addEventListener("mouseover", Icon5MoveIn);
        icon2Span.addEventListener("mouseout", Icon5MoveOut);
        icon3Span.addEventListener("mouseover", Icon6MoveIn);
        icon3Span.addEventListener("mouseout", Icon6MoveOut);
        $(".icon4").show();
        $(".icon5").show();
        $(".icon6").show();
    }
}
mediaQueryList500.addEventListener('change', handleScreenChange500);

//below are for screen control starting at 700px==========================
const mediaQueryList700 = window.matchMedia("(min-width: 700px)");
function handleScreenChange700(mql) {
    if(mql.matches){
        $(".search-container").after($(".brand-icons"));
        $(".brand-icons").show();
        $(".icon4").hide();
        $(".icon5").hide();
        $(".icon6").hide();
    }else{
        $("#btn-menu").after($(".search-container"));
        $(".brand-icons").hide();
    }
}
mediaQueryList700.addEventListener('change', handleScreenChange700);

//below are for screen control starting at 800px==========================
const mediaQueryList800 = window.matchMedia("(min-width: 800px)");
function handleScreenChange800(mql) {
    if(mql.matches){
        $("#main-navigation").append($(".search-container"));
    }else{
        $(".brand-icons").before($(".search-container"));
    }
}
mediaQueryList800.addEventListener('change', handleScreenChange800);

//below are for initial screen adjust==========================
function initialScreen(){
    if(mediaQueryList500.matches){
        handleScreenChange500(mediaQueryList500);
    }
    if(mediaQueryList700.matches){
        handleScreenChange700(mediaQueryList700);
    }
    if(mediaQueryList800.matches){
        handleScreenChange800(mediaQueryList800);
    }
}
initialScreen();
