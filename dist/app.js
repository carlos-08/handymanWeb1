const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-list");
  const navLinks = document.querySelectorAll(".list-item");
  const navLine = document.querySelectorAll(".nav-list hr");

  //Toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //burger animation
    burger.classList.toggle("toggle");
    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.3}s`;
      }
      // remove nav when click on link
      link.addEventListener("click", () => {
        link.classList.add("active");
        if (nav.classList.contains("nav-active")) {
          nav.classList.remove("nav-active");
          burger.classList.remove("toggle");
        }
      });
    });

    // navline
    navLine.forEach((cur, index) => {
      if (cur.style.animation) {
        cur.style.animation = "";
      } else {
        cur.style.animation = `lineFade 0.5s ease forwards ${index / 7 + 0.2}s`;
      }
    });
  });
};
navSlide();

// animation
AOS.init({
  offset: 160,
  duration: 0900
});

// jQuery Smooth Scroll
$("#nav-bar a").on("click", function(e) {
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      900
    );
  }
});
