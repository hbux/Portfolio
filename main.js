function openMobileNav() {
    document.querySelector(".mobile-nav-background").style.display = "block";
}

window.onclick = function(event) {
    if (event.target == document.querySelector(".mobile-nav-background")) {
        document.querySelector(".mobile-nav-background").style.display = "none";
    }
  }