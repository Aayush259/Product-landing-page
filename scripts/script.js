const ToggleBarShow = (listOfElements) => {
    for (let element of listOfElements) {
        element.classList.toggle("bar-show");
    }
};

// Adding event listener to Hamburger
const Hamburger = document.querySelector(".hamburger");

Hamburger.addEventListener("click", () => {
    
    // Selecting all bars
    const Bars = document.querySelectorAll(".bar");

    ToggleBarShow(Bars);

    document.querySelector("#nav-bar ul").classList.toggle("ul-show");

})

// Adding event listener to nav links so that when any of the link is clicked then the nav-bar will hide automatically
const NavLinks = document.querySelectorAll(".nav-link");

NavLinks.forEach((NavLink) => {
    NavLink.addEventListener("click", () => {
        document.querySelector("#nav-bar ul").classList.toggle("ul-show");
        ToggleBarShow(document.querySelectorAll(".bar"));
    });
})