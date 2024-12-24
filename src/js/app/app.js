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
        $(".go-top-btn").removeClass("opacity-0 invisible");
        $(".go-top-btn").addClass("opacity-100 visible");
      } else {
        $(".go-top-btn").removeClass("opacity-100 visible");
        $(".go-top-btn").addClass("opacity-0 invisible");
      }

      if ($("#anchorArea").length) {
        const anchorAreaPosition = $("#anchorArea").offset().top;
        if (
          scrollTop > anchorAreaPosition &&
          scrollTop + window.innerHeight < $("#siteFooter").offset().top
        ) {
          $("#projectSideAnchor").addClass("is-scroll");
        } else {
          $("#projectSideAnchor").removeClass("is-scroll");
        }
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

  const switchTab = () => {
    function switchContent(index) {
      $(".js-switch-content").hide();
      $(".js-switch-content").eq(index).fadeIn();
    }

    $(".js-switch-tab").eq(0).addClass("is-active");
    $(".js-switch-content").eq(0).show();
    $(".js-switch-tab").on("click", function () {
      var index = $(this).index();
      switchContent(index);
      $(this).addClass("is-active");
      $(this).siblings().removeClass("is-active");
    });
  };

  const scrollHeader = () => {
    function checkWindowPosition() {
      const scrollTop = $(window).scrollTop();
      if (scrollTop > 0) {
        $(".site-header__bg").removeClass("h-0");
        $(".site-header__bg").addClass("h-full");
        $(".site-header__main").removeClass("lg:h-20");
        $(".site-header__main").addClass("lg:h-16");
        $(".go-top").removeClass("opacity-0 invisible");
        $(".go-top").addClass("opacity-100 visible");
      } else {
        $(".site-header__bg").removeClass("h-full");
        $(".site-header__bg").addClass("h-0");
        $(".site-header__main").removeClass("lg:h-16");
        $(".site-header__main").addClass("lg:h-20");
        $(".go-top").removeClass("opacity-100 visible");
        $(".go-top").addClass("opacity-0 invisible");
      }
    }
    checkWindowPosition();
    $(window).on("scroll", checkWindowPosition);
  };

  const scrollAnchor = () => {
    function checkAnchorPosition() {
      const scrollTop = $(window).scrollTop();
      $("[data-href]").each(function () {
        const target = $(this).data("href");
        const targetPosition = $(target).offset().top;
        const targetHeight = $(target).outerHeight();
        const siteAnchorHeight = $(".site-anchor").outerHeight();
        if (
          targetPosition - 1 <= scrollTop + 90 + siteAnchorHeight &&
          targetPosition - 1 + targetHeight > scrollTop + 90 + siteAnchorHeight
        ) {
          $(this).addClass("is-active");
        } else {
          $(this).removeClass("is-active");
        }
      });
    }
    checkAnchorPosition();
    $(window).on("scroll", checkAnchorPosition);
  };

  // const syncMobileAnchor = () => {
  //   function checkAnchorPosition() {
  //     const scrollTop = $(window).scrollTop();
  //     $("#sectionMobileAnchor [data-anchor]").each(function () {
  //       const target = $(this).data("anchor");
  //       const targetPosition = $(target).offset().top;
  //       const targetHeight = $(target).outerHeight();
  //       const targetTitle = $(target).data("anchor-title");
  //       if (
  //         targetPosition - 65 <= scrollTop &&
  //         targetPosition + targetHeight > scrollTop
  //       ) {
  //         $("[data-toggle-slide='#sectionAnchor']")
  //           .find("h3")
  //           .text(targetTitle);
  //       }
  //     });
  //   }
  //   checkAnchorPosition();
  //   $(window).on("scroll", checkAnchorPosition);
  // };

  const magnificPopup = () => {
    $(".zoom-gallery").each(function () {
      $(this).magnificPopup({
        delegate: "a",
        type: "image",
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: "mfp-with-zoom mfp-img-mobile",

        // If you enable allowHTMLInTemplate -
        // make sure your HTML attributes are sanitized if they can be created by a non-admin user
        allowHTMLInTemplate: true,
        image: {
          verticalFit: true,
        },

        gallery: {
          enabled: true,
        },
        zoom: {
          enabled: true,
          duration: 300, // don't foget to change the duration also in CSS
          opener: function (element) {
            return element.find("img");
          },
        },
      });
    });
  };

  $(() => {
    initSwiper();
    initAnimation();
    scrollWindow();
    goAnchor();
    goTop();
    switchTab();
    scrollHeader();
    scrollAnchor();
    magnificPopup();
  });
})(jQuery);
