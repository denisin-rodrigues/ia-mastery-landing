// GSAP Init
gsap.registerPlugin(ScrollTrigger);

// 1. Scroll Velocity (Marquee)
const marquee = document.getElementById("velocity-marquee");
if (marquee) {
    ScrollTrigger.create({
        onUpdate: (self) => {
            const velocity = Math.abs(self.getVelocity());
            const direction = self.direction === 1 ? 1 : -1;
            gsap.to(marquee, {
                xPercent: direction * (velocity / 10),
                duration: 0.5,
                ease: "power2.out"
            });
        }
    });

    gsap.to(marquee, {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "none"
    });
}

// 2. Terminal Typing Animation
const terminalText = "Iniciando protocolo de comando de squad...";
const terminalElement = document.getElementById("terminal-typing");
let i = 0;

function typeWriter() {
    if (terminalElement && i < terminalText.length) {
        terminalElement.textContent += terminalText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

ScrollTrigger.create({
    trigger: ".terminal",
    start: "top 80%",
    onEnter: () => {
        if (terminalElement) {
            terminalElement.textContent = "";
            typeWriter();
        }
    }
});

// 3. Reveal animations for Bento Cards and Sections
gsap.from(".bento-card, .bg-zinc-950 .text-center", {
    y: 50,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".bento-card, .bg-zinc-950",
        start: "top 85%",
    }
});

// 4. Smooth reveal for White Section
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

// 5. FAQ Logic (Simple Vanilla)
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
        if (!isActive) item.classList.add('active');
    });
});
