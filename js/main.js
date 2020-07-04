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
  $("#total").text(autoplaySlider.getTotalSlideCount());
});

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
});

let day = document.querySelector("#day");
let month = document.querySelector("#month");
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
let date = new Date();

day.textContent = date.getDate();

month.textContent = (monthNames[date.getMonth()]);

// magnificPopup
$('.open-popup-link').magnificPopup({
  type: 'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});