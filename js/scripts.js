// GET FOOTER HEIGHT TO OVERLAY IMAGE
var footer = document.getElementById('footer');
footer.style.marginTop = "-" + footer.clientHeight + "px";

// STICKY MENU
var headerNav = document.getElementById("main-nav"); // get the navbar element\
var navScroll = headerNav.offsetTop; // get distance of navbar to the top of the page at the begining
window.addEventListener('resize', function () {
    navScroll = headerNav.offsetTop; // get distance of navbar to the top of the page after resize
});
window.onscroll = function () { // update on scroll
    var scrollTop = window.pageYOffset; // get scroll distance
    if (window.innerWidth >= 768) { // no sticky menu if mobile
        if (scrollTop >= navScroll) {
            headerNav.classList.add('sticky'); // add sticky class
        } else {
            headerNav.classList.remove('sticky'); // add sticky class
        }
    }
    // show go to top if scrolled
    var goTop = document.getElementById('goTop');
    if (scrollTop >= 360) {
        goTop.classList.add('visible');
    } else {
        goTop.classList.remove('visible');
    }
}
