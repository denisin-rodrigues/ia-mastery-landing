// GSAP Init
gsap.registerPlugin(ScrollTrigger);

// 1. Scroll Velocity (Marquee)
let currentScroll = 0;
let isScrollingDown = true;

const marquee = document.getElementById("velocity-marquee");

ScrollTrigger.create({
    onUpdate: (self) => {
        const velocity = Math.abs(self.getVelocity());
        const direction = self.direction === 1 ? 1 : -1;
        
        // Aumenta a velocidade do marquee baseado na velocidade do scroll
        gsap.to(marquee, {
            xPercent: direction * (velocity / 10),
            duration: 0.5,
            ease: "power2.out"
        });
    }
});

// Loop contínuo do marquee
gsap.to(marquee, {
    xPercent: -50,
    repeat: -1,
    duration: 20,
    ease: "none"
});

// 2. Terminal Typing Animation
const terminalText = "Iniciando o fim da era solitária...";
const terminalElement = document.getElementById("terminal-typing");
let i = 0;

function typeWriter() {
    if (i < terminalText.length) {
        terminalElement.textContent += terminalText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Inicia a digitação quando o terminal entra na tela
ScrollTrigger.create({
    trigger: ".terminal",
    start: "top 80%",
    onEnter: () => {
        terminalElement.textContent = "";
        typeWriter();
    }
});

// 3. Reveal animations for Bento Cards
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

// 4. Hero Section Parallax
gsap.to(".orbit-container", {
    y: -50,
    scrollTrigger: {
        trigger: ".orbit-container",
        scrub: true
    }
});
