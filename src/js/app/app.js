(($) => {
  // 判斷是否為行動裝置
  const isTouchDevice = navigator.userAgent.match(
    /(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/
  );

  const initSwiper = () => {
    new Swiper(".hero .swiper", {
      speed: 1000,
      loop: $(".hero .swiper-slide").length > 1,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
  };

  const initAnimation = () => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  };

  const scrollWindow = () => {
    function checkWindowPosition() {
      const scrollTop = $(window).scrollTop();
      if (scrollTop > 0) {
      } else {
      }
    }
    checkWindowPosition();
    $(window).on("scroll", checkWindowPosition);
  };

  const goAnchor = () => {
    $("[data-href]").on("click", function () {
      const target = $(this).data("href");
      const targetPosition = $(target).offset().top;
      $("html,body").stop().animate(
        {
          scrollTop: targetPosition,
        },
        800
      );
    });
  };

  const goTop = () => {
    $(".go-top").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        750
      );
    });
  };

  $(() => {
    initSwiper();
    initAnimation();
    scrollWindow();
    goAnchor();
    goTop();
  });
})(jQuery);
