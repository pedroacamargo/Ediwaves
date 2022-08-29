function changeBackground() {
    var scrollValue = window.scrollY;
    var navBar = document.getElementById("header")

    if (scrollValue < 1) {
        navBar.classList.remove("bgchange")
    } else {
        navBar.classList.add("bgchange")
    }

}

window.addEventListener('scroll', changeBackground)