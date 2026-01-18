// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    // Custom Cursor
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follower");

    // Move cursor logic
    document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1
        });
        gsap.to(follower, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.6, // Slower follow effect
            ease: "power2.out"
        });
    });

    // Hover effects for cursor
    const hoverTargets = document.querySelectorAll("a, button, .about-card");
    hoverTargets.forEach(target => {
        target.addEventListener("mouseenter", () => {
            gsap.to(cursor, { scale: 0, duration: 0.2 });
            gsap.to(follower, { scale: 2, borderColor: "#6c63ff", duration: 0.2 });
        });
        target.addEventListener("mouseleave", () => {
            gsap.to(cursor, { scale: 1, duration: 0.2 });
            gsap.to(follower, { scale: 1, borderColor: "rgba(255,255,255,0.5)", duration: 0.2 });
        });
    });

    // Scroll Animations: Certifications
    gsap.to(".cert-item", {
        scrollTrigger: {
            trigger: ".certifications-section",
            start: "top 80%"
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Mobile Menu Logic
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("toggle");

        // Staggered Link Animation
        if (navLinks.classList.contains("active")) {
            gsap.from(links, {
                x: 50,
                opacity: 0,
                duration: 0.5,
                stagger: 0.2,
                ease: "power2.out",
                delay: 0.3
            });
        }
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.classList.remove("toggle");
        });
    });

    // Text Scramble Effect for Hero Subtitle
    const roles = ["Web Developer", "Visual Artist", "Creative Writer"];
    let roleIndex = 0;
    const heroSubtitle = document.querySelector(".hero-subtitle");
    // Preserve the original html structure
    const originalSubtitle = heroSubtitle.innerHTML;

    // Custom 3D Tilt Effect for Cards
    const cards = document.querySelectorAll(".about-card");

    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate rotation
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
            const rotateY = ((x - centerX) / centerX) * 10;

            gsap.to(card, {
                rotationX: rotateX,
                rotationY: rotateY,
                transformPerspective: 1000,
                scale: 1.05,
                duration: 0.2,
                ease: "power2.out"
            });
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(card, {
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                duration: 0.5,
                ease: "elastic.out(1, 0.5)"
            });
        });
    });

    // Hero Section Animations (Enhanced)
    const tl = gsap.timeline();

    tl.from(".hero-title .block", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
    })
        .from(".hero-subtitle", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.5")
        .from(".cta-group a", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        }, "-=0.5")
        .from(".shape", {
            scale: 0,
            opacity: 0,
            duration: 2,
            stagger: 0.3,
            ease: "elastic.out(1, 0.3)"
        }, "-=1.5");

    // Continuous Floating Animation for Shapes
    gsap.to(".shape-1", {
        y: -30,
        x: 20,
        rotation: 10,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
    });
    gsap.to(".shape-2", {
        y: 30,
        x: -20,
        rotation: -10,
        duration: 5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
    });
    gsap.to(".shape-3", {
        y: -20,
        scale: 1.1,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
    });

    // Scroll Animations: About Section
    gsap.from(".about-card", {
        scrollTrigger: {
            trigger: ".about-grid",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Scroll Animations: Skills
    const skillBars = document.querySelectorAll(".skill-bar");
    skillBars.forEach(bar => {
        const fill = bar.querySelector(".fill");
        const width = bar.dataset.width;

        gsap.to(fill, {
            scrollTrigger: {
                trigger: bar,
                start: "top 85%",
            },
            width: width,
            duration: 1.5,
            ease: "power2.out"
        });
    });

    // Scroll Animations: Contact
    gsap.from(".contact-form", {
        scrollTrigger: {
            trigger: ".contact-section",
            start: "top 80%"
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
});
