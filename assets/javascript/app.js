const btnMenuMobile = document.querySelector("#btn_menu_mobile");
const btnMode2 = document.querySelector("#btn_mode2");
const menuMobileList = document.querySelector("#mobile_menu");
const main = document.querySelector("#main");
const logoParent = document.querySelector("#logo");
const logo = document.querySelector("#logo>div");
const darkMode = document.querySelector("#darkMode");
const mainNavbar = document.querySelector("#main_navbar");
const show_skills = document.querySelectorAll(".show_skills");
const boxesSkill = document.querySelectorAll(".boxes_skill");
const services = document.querySelectorAll("#services_boxes>div");
const boxPortfolio = document.querySelectorAll(".box_portfolio");
btnMenuMobile.addEventListener("click",function () {
    menuMobileList.style.transition="all 0.5s";
    menuMobileList.classList.toggle("show")
})


btnMode2.addEventListener("click",function () {
    main.style.transition="all 0.5s";
        main.classList.toggle("dark")
        main.classList.toggle("text-white")
        menuMobileList.style.transition="all 0.5s";
        menuMobileList.classList.toggle("dark")
        menuMobileList.classList.toggle("shadow_element")
        logo.style.transition="all 0.5s";
        logoParent.style.transition="all 0.5s";
        logo.classList.toggle("dark");
        logoParent.classList.toggle("dark");
        logoParent.style.background= "#191523";
   
    services.forEach(function(elements) {
        elements.classList.toggle("bg_services");
        elements.classList.toggle("text-white");

    })
    boxPortfolio.forEach(function(elements) {
        elements.classList.toggle("bg_services");
        elements.classList.toggle("shadow_protfolio");
        elements.classList.toggle("text-white");

    })
    let modeTheme;
    if(main.classList.contains("dark")){
        modeTheme = "dark";
        console.log(modeTheme)
    }else{
        modeTheme = "white";
        console.log(modeTheme)
    }
    localStorage.setItem("mode",JSON.stringify(modeTheme));
    
})


darkMode.addEventListener("click",function () {
    main.style.transition="all 0.5s";
        main.classList.toggle("dark")
        main.classList.toggle("text-white")
        menuMobileList.style.transition="all 0.5s";
        menuMobileList.classList.toggle("dark")
        menuMobileList.classList.toggle("shadow_element")
        logo.style.transition="all 0.5s";
        logoParent.style.transition="all 0.5s";
        logo.classList.toggle("dark");
        logoParent.classList.toggle("dark");
        logoParent.style.background= "#191523";
    mainNavbar.classList.toggle("bg_navbar");


    services.forEach(function(elements) {
        elements.classList.toggle("bg_services");
        elements.classList.toggle("text-white");

    })

    boxPortfolio.forEach(function(elements) {
        elements.classList.toggle("bg_services");
        elements.classList.toggle("text-white");
        elements.classList.toggle("shadow_protfolio");

    })


    let modeTheme;
    if(main.classList.contains("dark")){
        modeTheme = "dark";
        console.log(modeTheme)
    }else{
        modeTheme = "white";
        console.log(modeTheme)
    }
    localStorage.setItem("mode",JSON.stringify(modeTheme));
    
})

let modeLocal = JSON.parse(localStorage.getItem("mode"));
if(modeLocal === 'dark'){
    main.style.transition="all 0.5s";
    main.classList.toggle("dark")
    main.classList.toggle("text-white")
    menuMobileList.style.transition="all 0.5s";
    menuMobileList.classList.toggle("dark")
    menuMobileList.classList.toggle("shadow_element")
    logo.style.transition="all 0.5s";
    logoParent.style.transition="all 0.5s";
    logo.classList.toggle("dark");
    logoParent.classList.toggle("dark");
    logoParent.style.background= "#191523";
    mainNavbar.classList.toggle("bg_navbar");
    services.forEach(function(elements) {
        elements.classList.toggle("bg_services");
        elements.classList.toggle("text-white");
    })
    boxPortfolio.forEach(function(elements) {
        elements.classList.toggle("bg_services");
        elements.classList.toggle("text-white");
        elements.classList.toggle("shadow_protfolio");


    })
}

window.addEventListener("scroll",function() {
    mainNavbar.classList.toggle("fixed",window.scrollY > 400);
})
