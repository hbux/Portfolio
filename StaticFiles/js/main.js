function openMobileNav() {
    document.querySelector(".mobile-nav-background").style.display = "block";
}

function toggleContactModal() {
    if (document.querySelector(".modal").style.display === "flex") {
        document.querySelector(".modal").style.display = "none";
    }
    else {
        document.querySelector(".modal").style.display = "flex";
        document.querySelector(".mobile-nav-background").style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == document.querySelector(".mobile-nav-background")) {
        document.querySelector(".mobile-nav-background").style.display = "none";
    }
    else if (event.target == document.querySelector(".modal")) {
        document.querySelector(".modal").style.display = "none";
    }
  }