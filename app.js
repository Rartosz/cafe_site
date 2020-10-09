let hamburgerSpans = document.querySelectorAll(".menu-span");
let menuBtn = document.querySelector(".menu-button");
let nav = document.querySelector("nav");
let body = document.querySelector("body");
let menuLinks = [...document.querySelectorAll(".menu-link")];
let menuUnderline = [...document.querySelectorAll(".underline")];

let menuLinkHover = () => 
{   
    for(let i=0; i<menuLinks.length; i++)
    {   
        menuLinks[i].addEventListener("mouseover", function() 
        {
            menuUnderline[i].classList.add("underlineHover");
        });
        menuLinks[i].addEventListener("mouseout", function() 
        {
            menuUnderline[i].classList.remove("underlineHover");
        });

    }

}


let menuClicked = () => 
{
    hamburgerSpans[0].classList.toggle("first-span-active");
    hamburgerSpans[1].classList.toggle("second-span-active");
    hamburgerSpans[2].classList.toggle("third-span-active");
    nav.classList.toggle("navMenuClicked");
    // body.classList.toggle("bodyMenuClicked");
    
}


menuBtn.addEventListener("click", menuClicked);


menuLinkHover();




