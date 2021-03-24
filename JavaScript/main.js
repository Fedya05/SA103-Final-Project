//1.fixed elave etmek-> start

let nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.innerWidth > 768) {
    nav.classList.toggle("fixed-top", window.scrollY > 180);
  } else {
    nav.classList.toggle("fixed-top", window.scrollY > 471);
  }
});

//1. ->sonu

//2.slider btnlara hover elave etmek
let entrySection = document.querySelector(".entry"),
  sliderElems = document.querySelector(".slider-btns");

sliderElems.classList.add("hide");
function sliderBtnShow() {
  sliderElems.classList.remove("hide");
  sliderElems.classList.add("show");
}
function sliderBtnHide() {
  sliderElems.classList.remove("show");
  sliderElems.classList.add("hide");
}

entrySection.addEventListener("mouseenter", () => {
  setTimeout(sliderBtnShow, 200);
});
entrySection.addEventListener("mouseleave", () => {
  setTimeout(sliderBtnHide, 200);
});
//2.->sonu
//3.slider yaratmaq

let entry = document.querySelector(".entry"),
  next = document.querySelector(".slider-next"),
  prev = document.querySelector(".slider-prev");

// function slideNum(e) {
//   if (e > sliders.length) {
//     slideIndex = 1;
//   }
//   if (e < 1) {
//     slideIndex = sliders.length;
//   }
//   sliders.forEach((m) => (m.style.display = "none"));
//   {
//     sliders[slideIndex - 1].style.display = "block";
//   }
// }
// slideNum(1);

// function changeSlide(x) {
//   slideNum((slideIndex += x));
// }
// function autoChange() {
//   setInterval(changeSlide(1), 300);
// }
// next.addEventListener("click", () => {
//   changeSlide(1);
// });

// prev.addEventListener("click", () => {
//   changeSlide(-1);
// });

next.addEventListener("click", () => {
  entry.classList.toggle("slider-1");
  entry.classList.toggle("slider-2");
});
prev.addEventListener("click", () => {
  entry.classList.toggle("slider-1");
  entry.classList.toggle("slider-2");
});
//3.->sonu

//4. navbar 768px

let navBtn = document.querySelector("#navbtn"),
  respNavul = document.querySelector(".resp-nav-ul"),
  respNavli = document.querySelector(".resp-nav-li");

// function toggleNav() {
//   respNavul.classList.toggle("hide");
// }
function showNav() {
  if (respNavul.classList.contains("hide")) {
    respNavul.style.display = "flex";
    respNavul.classList.remove("hide");
  } else {
    respNavul.style.display = "none";
    respNavul.classList.add("hide");
  }
}

navBtn.addEventListener("click", showNav);

//4.-->sonu

//5.-->news date elave elemek

let newsDate = document.querySelectorAll(".news-date"),
  d = new Date(),
  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

newsDate.forEach((e) => {
  if (d.getDate() > 2) {
    e.innerHTML = `${
      months[d.getMonth()]
    } , ${d.getDate()}th ${d.getFullYear()}`;
  } else if (d.getDate() == 2) {
    e.innerHTML = `${
      months[d.getMonth()]
    } , ${d.getDate()}rd ${d.getFullYear()}`;
  }
  if (d.getDate() == 1) {
    e.innerHTML = `${
      months[d.getMonth()]
    } , ${d.getDate()}nd ${d.getFullYear()}`;
  }
  if (d.getDate() == 0) {
    e.innerHTML = `${
      months[d.getMonth()]
    } , ${d.getDate()}st ${d.getFullYear()}`;
  }
});

//5 -->sonu
//6.count elave etmek

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerHTML = "0";

  function updateCounter() {
    const target = +counter.getAttribute("data-target");
    const speed = +counter.getAttribute("data-speed");
    const def = +counter.innerText;
    if (def < target) {
      counter.innerHTML = Math.floor(def + speed);
      setTimeout(updateCounter, 150);
    }
  }

  window.addEventListener("scroll", () => {
    if (window.innerWidth <= 768) {
      if (window.scrollY >= 4570) {
        updateCounter();
      }
    } else {
      if (window.scrollY > 3052) {
        updateCounter();
      }
    }
  });
});
//6-->sonu
//7.carousel elave etmek
window.onload = (event) => {
  $(".main-carousel").flickity({
    cellAlign: "left",
    wrapAround: true,
    contain: true,
    pageDots: false,

    groupCells: false,
  });
};
//7.-->sonu
