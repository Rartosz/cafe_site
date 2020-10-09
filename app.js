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
    
}

function validateForm() {
    let input_email = document.forms["formularz"]["email"].value;
    if (input_email=="" || input_email == null) {
      alert("Email adress is required! :)");
      return false;
    }
    else 
    {
      alert("Thanks for contacting us!");
    }
  } 

let closeMenu = function() 
{
    hamburgerSpans[0].classList.remove("first-span-active");
    hamburgerSpans[1].classList.remove("second-span-active");
    hamburgerSpans[2].classList.remove("third-span-active");
    nav.classList.remove("navMenuClicked");
}

for(let i=0; i<menuLinks.length; i++)
    {   
        menuLinks[i].addEventListener("click", function() 
        {
            closeMenu();
        });
    }

menuBtn.addEventListener("click", menuClicked);


menuLinkHover();




