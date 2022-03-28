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

function toggleDropdown() {
    document.querySelector(".dropdown-content").classList.toggle("show");
    document.querySelector(".main-cta-resume svg").classList.toggle("rotate");
  }

window.onclick = function(event) {
    if (!event.target.matches('.main-cta-resume')) {
        document.querySelector(".main-cta-resume svg").classList.remove("rotate");
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
    }

    if (event.target == document.querySelector(".mobile-nav-background")) {
        document.querySelector(".mobile-nav-background").style.display = "none";
    }
    else if (event.target == document.querySelector(".modal")) {
        document.querySelector(".modal").style.display = "none";
    }
}