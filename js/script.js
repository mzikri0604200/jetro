var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    init: function () {
      updateCaptionText(this);
    },
    activeIndexChange: function () {
      updateCaptionText(this);
    },
  },
  debugger: true,
});

function updateCaptionText(slider) {
  var titles = document.querySelector('.title');
  titles.innerHTML = slider.slides[slider.activeIndex].dataset.title;
  var decs = document.querySelector('.desc');
  decs.innerHTML = slider.slides[slider.activeIndex].dataset.desc;
}
