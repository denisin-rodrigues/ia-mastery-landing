// GSAP Init
gsap.registerPlugin(ScrollTrigger);

// Hero Canvas Animation (Placeholder Logic - normally would use frame sequence)
const canvas = document.getElementById('hero-canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const img = new Image();
img.src = '../assets/images/masterskill_shard_hero.png'; // Path to our generated image

img.onload = () => {
    render();
};

function render() {
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width / 2) - (img.width / 2) * scale;
    const y = (canvas.height / 2) - (img.height / 2) * scale;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, x, y, img.width * scale, img.height * scale);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
});

// Set image in showcase section
document.getElementById('masterskill-image').src = img.src;

// Hero Animations
gsap.to('#hero-left', {
    x: -100,
    opacity: 0,
    scrollTrigger: {
        trigger: '.canvas-container',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});

gsap.to('#hero-right', {
    x: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '.canvas-container',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});

// Shard Scale on Scroll
gsap.to('#hero-canvas', {
    scale: 1.2,
    filter: 'blur(10px)',
    scrollTrigger: {
        trigger: '.canvas-container',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});

// Manifesto Reveal
gsap.from('#manifesto h2, #manifesto p', {
    y: 100,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '#manifesto',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    }
});

// MasterSkill Section Reveal
gsap.from('#masterskill h2, #masterskill p, #masterskill ul li', {
    x: -100,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '#masterskill',
        start: 'top 70%'
    }
});
