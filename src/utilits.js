
import $ from "jquery";

export const jqueryFuntion = () => {
  $(window)
    .off("load.jois-init")
    .on("load.jois-init", function () {
      /* ----------------------------------------------------------- */
      /*  PAGE PRELOADER
      /* ----------------------------------------------------------- */

      const preloader = $("#preloader");
      setTimeout(() => {
        preloader.addClass("preloaded");
      }, 800);

      const animateHeader = () => {
        $(".header-inner").addClass("animated fadeInDown");
        $(".home>div>div h1 span span").addClass("animated fadeInUp");
        $(".home>div>div .intro").addClass("animated fadeInUp");
        $(".home .cta").addClass("animated fadeInUp");
      };

      if ($(window).width() > 1024) {
        setTimeout(animateHeader, 1500);
      } else {
        setTimeout(animateHeader, 1100);
      }

      /* ----------------------------------------------------------- */
      /*  VERTICAL SCROLL ACTIVE STATE
      /* ----------------------------------------------------------- */

      const sections = $("section[id]");
      const desktopLinks = $(".menu ul li a");

      const updateActiveLink = () => {
        if (!sections.length || !desktopLinks.length) {
          return;
        }

        const scrollPosition = $(window).scrollTop();
        let currentId = sections.first().attr("id");

        sections.each(function () {
          const sectionTop = $(this).offset().top - 140;
          if (scrollPosition >= sectionTop) {
            currentId = $(this).attr("id");
          }
        });

        if (currentId) {
          desktopLinks.removeClass("active");
          $(`#${currentId}-link`).addClass("active");
        }
      };

      updateActiveLink();
      $(window).off("scroll.jois-nav").on("scroll.jois-nav", updateActiveLink);
    });

  $(document).ready(function () {
    /* ----------------------------------------------------------- */
    /*  SAFARI BROWSER FIXES
    /* ----------------------------------------------------------- */

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
      $("body").addClass("body-safari");
    }

    /* ----------------------------------------------------------- */
    /*  REMOVE # FROM URL PLACEHOLDERS
    /* ----------------------------------------------------------- */

    $("a[href='#']").on("click", function (e) {
      e.preventDefault();
    });

    function removeHash() {
      history.replaceState(
        "",
        document.title,
        window.location.origin + window.location.pathname + window.location.search
      );
    }

    /* ----------------------------------------------------------- */
    /*  DESKTOP & MOBILE MENU LINKS
    /* ----------------------------------------------------------- */

    const handleNavClick = function (e) {
      const targetId = $(this).attr("href");

      if (targetId && targetId.startsWith("#") && targetId.length > 1) {
        e.preventDefault();

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        setTimeout(removeHash, 300);
      }
    };

    $(".menu ul li a, #menu li a").off("click.jois-nav").on("click.jois-nav", handleNavClick);

    $("#menu li a").on("click", function () {
      $("#checkboxmenu").prop("checked", false).trigger("change");
    });

    $("#checkboxmenu")
      .off("change.jois-menu")
      .on("change.jois-menu", function () {
        if ($(this).is(":checked")) {
          $("body").addClass("overflow-hidden");
        } else {
          $("body").removeClass("overflow-hidden");
        }
      });

    /* ----------------------------------------------------------- */
    /*  REMOVE ANIMATIONS CLASSES IN DESKTOP
    /* ----------------------------------------------------------- */

    if ($(window).width() > 1024) {
      $(".fadeIn").removeClass("fadeIn");
      $(".fadeInUp").removeClass("fadeInUp");
      $(".fadeInDown").removeClass("fadeInDown");
      $(".fadeInRight").removeClass("fadeInRight");
      $(".fadeInLeft").removeClass("fadeInLeft");
    }

    /* ----------------------------------------------------------- */
    /*  CALL TO ACTION HOME
    /* ----------------------------------------------------------- */

    $("#cta").off("click.jois-cta").on("click.jois-cta", function (e) {
      e.preventDefault();
      const aboutSection = document.querySelector("#about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
};
