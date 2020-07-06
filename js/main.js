$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    auto: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
  var autoplaySlider = $("#autoplay").lightSlider({
    auto: true,
    loop: true,
    pauseOnHover: true,
    onBeforeSlide: function (el) {
      $("#current").text(el.getCurrentSlideCount());
    },
  });
  // $("#total").text(autoplaySlider.getTotalSlideCount());
  // // input
  // $(":input").inputmask();

  // $("#phone").inputmask({ mask: "(999) 999-9999" });
});

// img pop
// $(".test-popup-link").magnificPopup({
//   type: "image",
//   // other options
// });

// menu
const menuBtn = document.querySelector(".menu-btn");
let menuIsOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuIsOpen) {
    menuBtn.classList.add("open");
    menuIsOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuIsOpen = false;
  }
  var lightbox = $(".gallery a").simpleLightbox({
    /* options */
  });
});

let dayJs = document.querySelector("#day-js");
let monthJs = document.querySelector("#month-js");
let monthNames = [
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
let d = new Date();

dayJs.textContent = d.getDate();

monthJs.textContent = (monthNames[d.getMonth()]);

console.log('Mommy')

// simplelightbox
