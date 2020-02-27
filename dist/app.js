const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-list");
  const navLinks = document.querySelectorAll(".list-item");

  //Toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.3}s`;
      }
    });

    //burger animation
    burger.classList.toggle("toggle");
  });
};
navSlide();

// animation
AOS.init({
  offset: 200,
  duration: 0900
});

// smooth scroll

function smoothScroll(target, duration) {
  let target1 = document.querySelector(target);

  // get the position
  let targetPosition = target1.getBoundingClientRect().top;

  let startPosition = window.pageYOffset;

  // get the distance
  let distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, distance, duration);

    // scroll verticaly
    window.scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  //  ease animation function parameters (timeElapsed, startPosition, distance, duration)
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

let services = document.querySelector(".services");

services.addEventListener("click", () => {
  smoothScroll("#section2", 1500);
});
