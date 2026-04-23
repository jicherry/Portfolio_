$(function () {
  Splitting();
  gsap.registerPlugin(ScrollTrigger);

  $(window).on("load", function () {
    gsap.from(".m-t", {
      y: -300,
      duration: 1,
      ease: "bounce.out",
      opacity: 1,
    });

    gsap.to(".m-m .char", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.05,
      ease: "bounce.out",
      delay: 1,
    });

    gsap.to(".m-b .char", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.05,
      ease: "bounce.out",
      delay: 1.5,
    });
  });

  // about h3
  gsap.utils.toArray(".about-txt h3").forEach((el) => {
    gsap.set(el.querySelectorAll(".char"), {
      y: -100,
      opacity: 0,
    });

    gsap.to(el.querySelectorAll(".char"), {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.03,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "restart none none reset",
      },
    });
  });

  // skill

  gsap.utils.toArray(".skill-wrap ul").forEach((el) => {
    gsap.set(el.querySelectorAll(".char"), {
      y: -100,
      opacity: 0,
    });

    gsap.to(el.querySelectorAll(".char"), {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.05,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: "#skill",
        start: "top 50%",
        toggleActions: "restart none none reset",
      },
    });
  });

  gsap.from(".about-txt p", {
    y: -50,
    opacity: 0,
    duration: 0.8,
    ease: "bounce.out",
    scrollTrigger: {
      trigger: ".about-txt",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "0 70%",
        end: "0 30%",
        scrub: 1,
      },
    })
    .to(
      ["#main", "#about"],
      { backgroundColor: "#fff", color: "#000", ease: "none" },
      0
    )
    .fromTo(
      ".about-bg",
      { clipPath: "inset(50% 50% 50% 50% round 30%)" },
      { clipPath: "inset(0% 0% 0% 0% round 0%)", ease: "none", duration: 3 },
      0
    );

  $("#skill .skill-img").simplyScroll({
    speed: 6,
    pauseOnHover: false,
    pauseOnTouch: false,
  });

  gsap.from(".skill-img", {
    x: 300,
    opacity: 0,
    duration: 5,
    scrollTrigger: {
      trigger: "#skill",
      start: "top 39%",
      toggleActions: "restart none none none",
    },
  });

  gsap.utils.toArray(".skill-wrap ul li").forEach((item) => {
    gsap.from(item, {
      y: -50,
      opacity: 0,
      duration: 0.6,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  });

  //project

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#project",
        start: "top 35%",
        end: "top 30%",
        scrub: 1,
      },
    })
    .fromTo(
      "#project .project-title .p-top",
      { x: "-100%" },
      { x: "0%", ease: "none" },
      0
    )
    .fromTo(
      "#project .project-title .p-btm",
      { x: "100%" },
      { x: "0%", ease: "none" },
      0
    );

  ScrollTrigger.create({
    trigger: ".project-title",
    start: "top top",
    endTrigger: ".project-list",
    end: "bottom bottom",
    pin: true,
    pinSpacing: false,
  });

  // footer 진입
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "footer",
        start: "top 20%",
        end: "top 10%",
        scrub: 1,
      },
    })
    .to(
      "#project .project-title .p-top",
      { x: "-150%", ease: "none", immediateRender: false },
      0
    )
    .to(
      "#project .project-title .p-btm",
      { x: "150%", ease: "none", immediateRender: false },
      0
    );

  //footer
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "footer",
        start: "top bottom",
        end: "bottom 60%",
        scrub: 1,
      },
    })
    .to("#project .project-title .p-top", {
      x: "-150%",
      ease: "none",
      immediateRender: false,
    })
    .to(
      "#project .project-title .p-btm",
      {
        x: "150%",
        ease: "none",
        immediateRender: false,
      },
      0
    );

  gsap.from("footer .title", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "bounce.out",
    scrollTrigger: {
      trigger: "footer .title",
      start: "top 65%",
      toggleActions: "play none none reverse",
    },
  });

  // contact text
  gsap.set("footer .contact p:first-child .char", {
    y: -200,
    opacity: 0,
  });

  gsap.to("footer .contact p:first-child .char", {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.07,
    delay: 0.35,
    ease: "bounce.out",
    scrollTrigger: {
      trigger: "footer .contact",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });

  // contact email
  gsap.set("footer .contact a .char", {
    y: -200,
    opacity: 0,
  });

  gsap.to("footer .contact a .char", {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.08,
    delay: 0.5,
    ease: "bounce.out",
    scrollTrigger: {
      trigger: "footer .contact",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });

  // footer bottom
  gsap.from("footer .footer-btm p", {
    opacity: 0,
    duration: 1,
    delay: 2.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "footer .footer-btm",
      start: "top 95%",
      toggleActions: "play none none reverse",
    },
  });
});

/* reseponsiveWeb */

$(function () {
  $(".menu-open").on("click", function () {
    $(".gnb").toggleClass("on");
    $(this).toggleClass("on");
    $("body").toggleClass("on");
  });

  $(".gnb a").on("click", function () {
    $(".gnb").removeClass("on");
    $(".menu-open").removeClass("on");
    $("body").removeClass("on");
  });
});
