
window.addEventListener("scroll", () => {
  if (this.scrollY > 0) {
    document.querySelector(".navbar").classList.remove("py-4");
    document.querySelector(".navbar").classList.add("py-2", "shadow");
  } else {
    document.querySelector(".navbar").classList.add("py-4");
    document.querySelector(".navbar").classList.remove("py-2", "shadow");
  }
});

let scrollUp = document.querySelector(".scroll-up");
window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    scrollUp.style.display = "flex";
  } else {
    scrollUp.style.display = "none";
  }
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 24,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      //   spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      //   spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      //   spaceBetween: 20,
    },
  },
});

const DarkLight = document.getElementById("DarkLight");
const localData = localStorage.getItem("Theme");
const homeImg = document.querySelector(".homeImg");
const ab = document.querySelector(".ab");
if (localStorage.getItem("Theme")==null) {
  localStorage.setItem("Theme", "light");
};

if (localData=="light") {
  // DarkLight.classList = "ri-moon-clear-fill";
  DarkLight.style.color="#cdbc32";
  ab.title="Turn off the light";
  document.body.classList.remove("darkTheme");
  homeImg.src = "./assests/img/home 2.png";
} else if (localData == "dark") {
  // DarkLight.classList = "ri-sun-fill";
  DarkLight.style.color="#485785";
  ab.title="Turn on the light";
  document.body.classList.add("darkTheme");
  homeImg.src = "./assests/img/home 3.png";
}

DarkLight.addEventListener("click", () => {
  document.body.classList.toggle("darkTheme");
  if (document.body.classList.contains("darkTheme")) {
    // DarkLight.classList = "ri-sun-fill";
    DarkLight.style.color="#485785";
    ab.title="Turn on the light";
    homeImg.src = "./assests/img/home 3.png";
    localStorage.setItem("Theme", "dark");
  } else {
    // DarkLight.classList = "ri-moon-clear-fill";
    DarkLight.style.color="#cdbc32";
    ab.title="Turn off the light";
    homeImg.src = "./assests/img/home 2.png";
    localStorage.setItem("Theme", "light");
  }
});

AOS.init();
