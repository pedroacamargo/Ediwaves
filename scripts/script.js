function changeBackground() {
    var scrollValue = window.scrollY;
    var navBar = document.getElementById("header")

    if (scrollValue < 1) {
        navBar.classList.remove("bgchange")
        menuBtn.classList.remove("bgchange")
    } else {
        navBar.classList.add("bgchange")
    }

}

function changeMenuSquare() {
    var line1 = document.getElementById("line1")
    var line2 = document.getElementById("line2")
    var line3 = document.getElementById("line3")
    var slidemenu = document.getElementById("slideMenu")
    var navBar = document.getElementById("header") // header opacity when no scroll
    var opacity = document.getElementById("opacity")
    
    if (click == 0) {
        line1.classList.add("liney")
        line2.classList.add("linez")
        line3.classList.add("linex")
        slidemenu.classList.add("open")
        navBar.classList.add("bgchange")
        //opacity.classList.add("openopa")
        click = 1
    } else if (click != 0) {
        line1.classList.remove("liney")
        line2.classList.remove("linez")
        line3.classList.remove("linex")
        slidemenu.classList.remove("open")
        navBar.classList.remove("bgchange")
        //opacity.classList.remove("openopa")
        click = 0
    }
}

var click = 0
window.addEventListener('scroll', changeBackground)