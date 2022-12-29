new WOW().init();



gsap.registerPlugin(ScrollTrigger);

let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

gsap.utils.toArray("section").forEach((section, i) => {
  section.bg = section.querySelector(".bg"); 

  // Give the backgrounds some random images
  
  // the first image (i === 0) should be handled differently because it should start at the very top.
  // use function-based values in order to keep things responsive
  gsap.fromTo(section.bg, {
    backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
  }, {
    backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: () => i ? "top bottom" : "top top", 
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true // to make it responsive
    }
  });

});

gsap.from('.haha', 0.75, {
    x: 200,
    opacity: 0,
    ease: Power3.out,
    stagger: 1.5
  })
  gsap.from('.lefthaha', 0.75, {
    x: -200,
    opacity: 0,
    ease: Power3.out,
    stagger: 1.5
  })
  gsap.from('.midhaha', 0.75, {
    y: 200,
    opacity: 0,
    ease: Power3.out,
    stagger: 1.5
  })
  gsap.from('.righthaha', 0.75, {
    x: 200,
    opacity: 0,
    ease: Power3.out,
    stagger: 1.5
  })