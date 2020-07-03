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