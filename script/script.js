const openMenu = document.getElementById("open-menu-btn");
const closeMenu = document.getElementById("close-menu-btn");
const navMenu = document.getElementById("nav-class");
const closePageBtn = document.getElementById("close-btn");
const logInPage = document.getElementById("login-page");
const logInbtn = document.getElementById("login-btn");

openMenu.addEventListener("click", () => {
 navMenu.style.display = "flex";
 closeMenu.style.display = "inline-block";
 openMenu.style.display ="none"
})

closeMenu.addEventListener("click", () => {
    openMenu.style.display ="inline-block";
    closeMenu.style.display = "none";
    navMenu.style.display = " none";
} )

 closePageBtn.addEventListener( "click", () => {
 logInPage.style.display = "none";
})
 logInbtn.addEventListener( "click", () => {
 logInPage.style.display = "block";
})

// signup page
