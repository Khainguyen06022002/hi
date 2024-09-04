$(function () {
  if ($('.mv-top__slide.pc .mv-top__item').length > 1) {
    let mvTopPc = new Swiper(".mv-top__slide.pc", {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        waitForTransition: false
      },
      speed: 600,
      simulateTouch: false,
      pagination: {
        el: ".swiper-pagination",
        type: "custom",
        renderCustom: function (_sw, current, total) {
          return (
            "<span class='mv-top__current'>" +
            (current > 10 ? current : "0" + current) +
            "</span><span class='mv-top__total'>" +
            (total > 10 ? total : "0" + total) +
            "</span>"
          );
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        slideChange: function slideChange(_swiper) {
          const data_index = $('.swiper-slide-active.mv-top__item').data('index');
          $('.mv-top__slide.pc .mv-top__desc').css("opacity", "0");
          $('.mv-top__slide.pc .mv-top__desc').removeClass('desc-active');
          $('.mv-top__slide.pc .mv-top__desc[data-index="' + data_index + '"]').addClass('desc-active');
          $('.mv-top__slide.pc .mv-top__desc[data-index="' + data_index + '"]').css("opacity", "1");
          let process = document.getElementsByClassName("mv-top__process")
          for (let index = 0; index < process.length; index++) {
            process[index].animate([{ width: "0%" }, { width: "100%" }], {
              duration: 5000,
              iterations: 1,
            });
          }

        }
      }
    });
  }
  else {
    $('.mv-top__slide.pc .mv-top__desc').css("opacity", "1");
    $('.mv-top__slide.pc .mv-top__run').css("opacity", "0");
    $('.mv-top__slide.pc .mv-top__moved').css("opacity", "0");
  }
  if ($('.mv-top__slide.sp .mv-top__item').length > 1) {
    var mvTopSp = new Swiper(".mv-top__slide.sp", {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        waitForTransition: false
      },
      speed: 600,
      simulateTouch: false,
      pagination: {
        el: ".swiper-pagination",
        type: "custom",
        renderCustom: function (_sw, current, total) {
          return (
            "<span class='mv-top__current'>" +
            (current > 10 ? current : "0" + current) +
            "</span><span class='mv-top__total'>" +
            (total > 10 ? total : "0" + total) +
            "</span>"
          );
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        slideChange: function slideChange(_swiper) {
          const data_index = $('.swiper-slide-active.mv-top__item').data('index');
          $('.mv-top__slide.sp .mv-top__desc').css("opacity", "0");
          $('.mv-top__slide.sp .mv-top__desc').removeClass('desc-active');
          $('.mv-top__slide.sp .mv-top__desc[data-index="' + data_index + '"]').addClass('desc-active');
          $('.mv-top__slide.sp .mv-top__desc[data-index="' + data_index + '"]').css("opacity", "1");
          let process = document.getElementsByClassName("mv-top__process")
          for (let index = 0; index < process.length; index++) {
            process[index].animate([{ width: "0%" }, { width: "100%" }], {
              duration: 5000,
              iterations: 1,
            });
          }

        }
      }
    });
  }
  else {
    $('.mv-top__slide.sp .mv-top__desc').css("opacity", "1");
    $('.mv-top__slide.sp .mv-top__run').css("opacity", "0");
    $('.mv-top__slide.sp .mv-top__moved').css("opacity", "0");
  }
  let swiper = new Swiper(".all-contents__slide", {
    slidesPerView: 1.45,
    spaceBetween: 25,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1201: {
        slidesPerView: 2,
        spaceBetween: 100,
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 50,
      }
    },
    // navigation: {
    //   nextEl: ".all-contents__next",
    //   prevEl: ".all-contents__prev",
    // },
    on: {
      slideChangeTransitionEnd: function slideChangeTransitionEnd(_swiper) {
        let active= $('.all-contents__item.swiper-slide-active').data('title');
        let index = getIndexInArray(active, dataAllDetail)
        let userLang = document.documentElement.lang;
        if(userLang === 'ja'){
          $('#button-more__all').text(dataAllDetail[index].labelJa)
        }
        else {
          $('#button-more__all').text(dataAllDetail[index].labelEn)
        }
        $('#button-more__all').attr("href", dataAllDetail[index].url);
      }
    }
  });
  let count = 0;
  if ($("#four_seasons").length == 1) {
    imageSlideShow(count);
  }
});