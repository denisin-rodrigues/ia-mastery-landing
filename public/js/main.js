// GSAP Init
gsap.registerPlugin(ScrollTrigger);

// Reveal animations for Bento Cards
gsap.from(".bento-card", {
    y: 50,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".grid-cols-1",
        start: "top 80%",
    }
});

// Reveal for Section Titles
gsap.from("h2", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "h2",
        start: "top 90%",
    }
});

// Parallax for floating badges
gsap.to(".badge-float", {
    y: -20,
    scrollTrigger: {
        trigger: ".badge-float",
        scrub: true
    }
});

// Smooth reveal for White Section
gsap.from(".bg-white", {
    backgroundColor: "#000000",
    color: "#ffffff",
    scrollTrigger: {
        trigger: ".bg-white",
        start: "top 60%",
        end: "top 20%",
        scrub: true
    }
});
