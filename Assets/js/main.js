var swiperSmall = new Swiper(".small-video", {
  loop: true,
  spaceBetween: 2,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    250: {
      slidesPerView: 2,
    },
    315: {
      slidesPerView: 3,
    },
    410: {
      slidesPerView: 4,
    },
    550: {
      slidesPerView: 4,
    },
    800: {
      slidesPerView: 6,
    },
    1050: {
      slidesPerView: 8,
    },
    1350: {
      slidesPerView: 11,
    },
  },
});

var swiper = new Swiper(".slides", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// OFFERRRRRR
var swiperOffer = new Swiper(".offer", {
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    460: {
      slidesPerView: 3,
    },

    720: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 5,
    },
    1350: {
      slidesPerView: 6,
    },
  },
});

// OFFER-TIMEE
let remainingTime = 70000;
function setTime() {
  if (remainingTime == 0) return;
  let h = Math.floor(remainingTime / 3600);
  let m = Math.floor((remainingTime % 3600) / 60);
  let s = (remainingTime % 3600) % 60;
  document.querySelector("#hours").innerHTML = h;
  document.querySelector("#minutes").innerHTML = m;
  document.querySelector("#seconds").innerHTML = s;
}
setInterval(() => {
  remainingTime -= 1;
  setTime();
}, 1000);

// popular-brands

var swiperbrands = new Swiper(".popular-brand", {
  loop: true,
  spaceBetween: 2,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    250: {
      slidesPerView: 2,
    },
    315: {
      slidesPerView: 3,
    },
    410: {
      slidesPerView: 4,
    },
    550: {
      slidesPerView: 4,
    },
    800: {
      slidesPerView: 10,
    },
  },
});

// footer-decription

const descript = document.querySelector(".description-right");
const close = document.querySelector(".close");
const closeDesc = document.querySelector(".close-desc");
const open = document.querySelector(".open");
close.addEventListener("click", (e) => {
  descript.classList.remove("close-desc");
});

open.addEventListener("click", (e) => {
  descript.classList.add("close-desc");
});

// footer-links2

const links = document.querySelectorAll(".link-right");
const linkLeft = document.querySelectorAll(".link-left");
links.forEach((item) => {
  const linkHead = item.querySelector(".link-head");
  linkHead.addEventListener("click", (e) => {
    toggleItem(item);
    console.log(linkHead);
  });
});

const toggleItem = (item) => {
  const linkDiv = item.querySelector(".link-div");

  if (item.classList.contains("link-open")) {
    linkDiv.removeAttribute("style");
    item.classList.remove("link-open");
  } else {
    linkDiv.style.height = linkDiv.scrollHeight + "px";
    item.classList.add("link-open");
  }
};

// footer-decription2

const descriptionRight2 = document.querySelector(".description-right2");
const close2 = document.querySelector(".close2");
const closeDesc2 = document.querySelector(".close-desc2");
const open2 = document.querySelector(".open2");
close2.addEventListener("click", (e) => {
  descriptionRight2.classList.remove("close-desc2");
});

open2.addEventListener("click", (e) => {
  descriptionRight2.classList.add("close-desc2");
});
