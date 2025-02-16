let navChange = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    start: "5% 5%",
    end: "10% top",
    scrub: true,
    markers: true,
  },
});

navChange.to(".nav_contain.is-desktop", {
  backgroundColor: "#0B0B0C",
  boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.05)",
  duration: 0.5,
  ease: "circ.out",
  color: "#FFFFFF",
});
