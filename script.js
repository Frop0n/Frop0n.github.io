
document.addEventListener('DOMContentLoaded', () => {
    // Prevent scrolling during preloader
    document.body.style.overflow = 'hidden';
    
    // Preloader elements
    const preloader = document.getElementById('preloader');
    const letters = document.querySelectorAll('.preloader-text span');
const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    preloader.appendChild(progressBar);

    // Create vintage camera
    const camera = document.createElement('div');
    camera.className = 'vintage-camera';
    camera.innerHTML = `
        <div class="camera-body">
            <div class="camera-top">
                <div class="viewfinder"></div>
                <div class="flash-hotshoe"></div>
            </div>
            <div class="camera-front">
                <div class="lens-ring">
                    <div class="lens"></div>
                </div>
                <div class="light-meter"></div>
            </div>
            <div class="camera-bottom">
                <div class="film-advance"></div>
                <div class="shutter-button"></div>
            </div>
            <div class="camera-flash"></div>
        </div>
    `;
    preloader.appendChild(camera);

    // Animate letters
    gsap.to(letters, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
    });

    // Loading progress simulation
    let loaded = 0;
    const totalResources = document.querySelectorAll('img, script, link[rel="stylesheet"]').length;
    
    const updateProgress = () => {
        loaded++;
        const progress = Math.min(loaded / totalResources * 100, 100);
        gsap.to(progressBar, {
            width: `${progress}%`,
            duration: 0.3
        });

        // When everything is loaded
        if (progress >= 100) {
            // Camera shutter animation
            gsap.to('.shutter-button', {
                scale: 0.9,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                onComplete: () => {
            // Flash effect
            gsap.to('.camera-flash', {
                opacity: 1,
                scale: 50,
                duration: 0.05,
                backgroundColor: 'black',
                onComplete: () => {
                    // Black screen flash
                    gsap.to(preloader, {
                        backgroundColor: 'black',
duration: 0.01,
                                onComplete: () => {
                                    gsap.to(preloader, {
                                        opacity: 0,
                                        backgroundColor: 'black',
                                        duration: 0.5,
                                        onComplete: () => {
preloader.style.display = 'none';
                                            document.body.style.overflow = ''; // Re-enable scrolling
                                            initParticleSystem();
gsap.fromTo("#particle-text-container, .hero-section p, .hero-section a", 
                                                { opacity: 0, y: 20 },
                                                { 
                                                    opacity: 1, 
                                                    y: 0, 
                                                    duration: 1.2, 
                                                    ease: "power3.out",
                                                    stagger: 0.2
                                                }
                                            );
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    };

    // Simulate loading (in real implementation, use actual loading events)
    const loadingInterval = setInterval(() => {
        if (loaded < totalResources) {
            updateProgress();
        } else {
            clearInterval(loadingInterval);
        }
    }, 100);

    // For actual implementation, you would use:
    // window.addEventListener('load', updateProgress);
    // And track individual resource loading
// Check for scroll animations support
    if (!CSS.supports('animation-timeline: view()')) {
        // Fallback for browsers without scroll animations
        document.querySelectorAll('#services .bg-gray-800\\/85, #team .bg-gray-800\\/50, #contact .contact-method').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    }
// GSAP animations for smooth transitions
    gsap.from("#logo-container h1", {
        duration: 2,
        opacity: 0,
        y: 50,
        ease: "power3.out",
        delay: 0.5
    });
    gsap.from("p", {
        duration: 1.5,
        opacity: 0,
        y: 30,
        ease: "power2.out",
        delay: 1.2,
        textShadow: "0 2px 4px rgba(0,0,0,0)"
    });
    gsap.to("p", {
        duration: 1,
        textShadow: "0 2px 4px rgba(0,0,0,0.5)",
        delay: 2.2
    });
gsap.from("a", {
        duration: 1,
        opacity: 0,
        y: 20,
        ease: "back.out(1.7)",
        delay: 1.8
    });
    // Mobile services accordion
    function initServicesAccordion() {
        const accordionToggles = document.querySelectorAll('.accordion-toggle');
        
        accordionToggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                const accordion = toggle.closest('.service-accordion');
                const content = accordion.querySelector('.accordion-content');
                const icon = toggle.querySelector('i');
                
                // Toggle current accordion
                const isOpening = content.classList.contains('hidden');
                
                // Close all other accordions when opening a new one
                if (isOpening) {
                    document.querySelectorAll('.accordion-content').forEach(item => {
                        if (item !== content) {
                            item.classList.add('hidden');
                            const otherIcon = item.previousElementSibling.querySelector('i');
                            if (otherIcon) {
                                otherIcon.classList.remove('rotate-180');
                                otherIcon.style.transform = 'rotate(0deg)';
                            }
                        }
                    });
                }
                
                // Toggle current accordion
                content.classList.toggle('hidden');
                
                // Rotate icon
                if (icon) {
                    icon.style.transform = content.classList.contains('hidden') ? 
                        'rotate(0deg)' : 'rotate(180deg)';
                }
                
                // Force icon update
                feather.replace();
            });
        });
    }
    
    // Initialize accordion on load
    initServicesAccordion();
// Card animations on scroll
    const animateCards = (selector) => {
        gsap.utils.toArray(selector).forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                duration: 0.8,
                opacity: 0,
                y: 50,
                ease: "back.out(1.2)",
                delay: i * 0.1
            });
        });
    };
// Initialize work items animation
animateCards(".service-card");
animateCards(".work-item");
// Team Carousel
        const teamMembers = [
            {
                name: "Francisco Palomo",
                role: "Director de Postproducción",
                icon: "film",
                color: "blue",
                instagram: "https://instagram.com/Frop0n"
            },
            {
                name: "Massimo Pisano",
                role: "Guionista y Director Creativo",
                icon: "edit-3",
                color: "purple",
                instagram: "https://instagram.com/bolsilloprod"
            },
            {
                name: "Luis Mesa",
                role: "Director de Producción",
                icon: "mic",
                color: "pink",
                instagram: "https://instagram.com/bolsilloprod"
            },
            {
                name: "Felipe Bustos",
                role: "Asesor Legal y Financiero",
                icon: "briefcase",
                color: "green",
                instagram: "https://instagram.com/bolsilloprod"
            },
            {
                name: "Martín Rendón",
                role: "Director Comercial",
                icon: "dollar-sign",
                color: "yellow",
                instagram: "https://instagram.com/bolsilloprod"
            }
        ];

        let currentMember = 0;
        const carousel = document.querySelector('.team-carousel');
        const memberContainer = carousel.querySelector('.team-member');
        const dotsContainer = carousel.querySelector('.team-dots');

        // Create dots
        teamMembers.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = `w-3 h-3 rounded-full ${i === 0 ? 'bg-white' : 'bg-gray-500'}`;
            dot.addEventListener('click', () => showMember(i));
            dotsContainer.appendChild(dot);
        });

        // Navigation handlers
        carousel.querySelector('.team-prev').addEventListener('click', () => {
            showMember((currentMember - 1 + teamMembers.length) % teamMembers.length);
        });

        carousel.querySelector('.team-next').addEventListener('click', () => {
            showMember((currentMember + 1) % teamMembers.length);
        });

        function showMember(index) {
            currentMember = index;
            const member = teamMembers[index];
            
            // Update active dot
            dotsContainer.querySelectorAll('button').forEach((dot, i) => {
                dot.className = `w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-gray-500'}`;
            });

            // Animate transition
            gsap.to(memberContainer, {
                opacity: 0,
                y: 20,
                duration: 0.3,
                onComplete: () => {
                    memberContainer.innerHTML = `
                        <div class="w-32 h-32 mx-auto rounded-full bg-${member.color}-500/10 flex items-center justify-center mb-6">
                            <i data-feather="${member.icon}" class="w-12 h-12 text-${member.color}-400"></i>
                        </div>
                        <h3 class="text-2xl font-bold">${member.name}</h3>
                        <p class="text-gray-400 mt-2 mb-4">${member.role}</p>
                        <div class="flex justify-center gap-4">
                            <a href="${member.instagram}" target="_blank" class="social-link">
                                <i data-feather="instagram" class="w-6 h-6 text-${member.color}-400"></i>
                            </a>
                        </div>
                    `;
                    feather.replace();
                    
                    gsap.fromTo(memberContainer, 
                        { opacity: 0, y: -20 },
                        { opacity: 1, y: 0, duration: 0.5 }
                    );
                }
            });
        }

        // Initialize first member
        showMember(0);
animateCards(".contact-method");
    
    // Fallback for browsers without scroll animations
    if (!CSS.supports('animation-timeline: view()')) {
        document.querySelectorAll('#contact .contact-method').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    }
});
function initParticleSystem() {
    const container = document.getElementById('particle-container');
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 40;
    
    // Renderer with smoother settings
    const renderer = new THREE.WebGLRenderer({ 
        alpha: true,
        antialias: true,
        powerPreference: "high-performance"
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    // Enhanced renderer settings
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    // Add space dust background particles
        const dustCount = 6000; // Increased dust particles by 20%
const dustGeometry = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);
    const dustSizes = new Float32Array(dustCount);
    
    for (let i = 0; i < dustCount; i++) {
        dustPositions[i * 3] = (Math.random() - 0.5) * 3000;
        dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 3000;
        dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 3000;
        dustSizes[i] = 0.1 + Math.random() * 0.8;
    }
    
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    dustGeometry.setAttribute('size', new THREE.BufferAttribute(dustSizes, 1));
    
    const dustMaterial = new THREE.PointsMaterial({
        size: 1,
        color: 0x666666,
        transparent: true,
        opacity: 0.6,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    });
    
    const dustParticles = new THREE.Points(dustGeometry, dustMaterial);
    dustParticles.position.z = -100;
    scene.add(dustParticles);
function createCircleTexture() {
const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const context = canvas.getContext('2d');
        // Create planetary glow effect
        const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(150,150,150,1)');
        gradient.addColorStop(0.1, 'rgba(150,150,150,0.9)');
        gradient.addColorStop(0.3, 'rgba(150,150,150,0.7)');
        gradient.addColorStop(0.6, 'rgba(150,150,150,0.4)');
        gradient.addColorStop(1, 'rgba(150,150,150,0)');
context.fillStyle = gradient;
        context.beginPath();
        context.arc(32, 32, 32, 0, Math.PI * 2);
        context.fill();
        
        const texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        return texture;
    }
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        // Simple slow rotation for space dust
        dustParticles.rotation.y += 0.0002;
        dustParticles.rotation.x += 0.0001;
renderer.render(scene, camera);
    }
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });
    // Initialize particle text
    initParticleText();
    
    // Start animation
    animate();
function initParticleText() {
        const canvas = document.getElementById('particle-text');
        const ctx = canvas.getContext('2d');
        const container = document.getElementById('particle-text-container');
        const isMobile = window.innerWidth < 768;
        
        // Set canvas size
        function resizeCanvas() {
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        // Mobile fallback - remove canvas and use HTML text
        if (isMobile) {
            canvas.style.display = 'none';
            const textEl = document.createElement('h1');
            textEl.className = 'text-white font-montserrat text-5xl md:text-7xl font-black tracking-tight text-center';
            textEl.textContent = 'BOLSILLO';
            container.appendChild(textEl);
            return;
        }
// Desktop particle effect
        const text = "BOLSILLO";
        // Dynamic sizing based on screen dimensions and pixel density
        const pixelRatio = window.devicePixelRatio || 1;
        const screenArea = window.innerWidth * window.innerHeight;
        // Dynamic font sizing based on viewport
        const vw = Math.min(window.innerWidth, 1920); // Cap at 1920px
        const vh = Math.min(window.innerHeight, 1080); // Cap at 1080px
        
        // Calculate base size using viewport units and aspect ratio
        const aspectRatio = vw / vh;
        let baseSize;
        
        if (aspectRatio > 1.8) { // Very wide screens
            baseSize = vh * 0.3;
        } else if (aspectRatio > 1.3) { // Standard widescreen
            baseSize = vh * 0.25;
        } else if (aspectRatio > 0.8) { // Square-ish
            baseSize = vw * 0.15;
        } else { // Tall screens
            baseSize = vw * 0.2;
        }
        
        // Apply pixel ratio scaling
        const fontSize = Math.min(
            baseSize * (pixelRatio > 1.5 ? 0.9 : 1),
            vh * 0.4 // Never exceed 40% of viewport height
        );
const fontFamily = 'Montserrat';
        const fontWeight = '900';
        // Dynamic particle settings
        // Dynamic particle sizing based on text size
        const particleSize = Math.max(
            2,
            Math.min(5, fontSize * 0.03)
        );
        const particleSpacing = Math.max(
            3,
            Math.min(6, fontSize * 0.04)
        );
// Dynamic interaction settings
        // Interaction parameters scaled to text size
        const baseInteraction = fontSize * 0.5;
        const attractionRadius = baseInteraction * 1.5;
        const attractionForce = 0.6;
        const repulsionRadius = baseInteraction;
        const repulsionForce = 0.9;
        const friction = 0.25;
// Create particles
        let particles = [];
        
        // Enhanced text rendering for high DPI
        ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
        ctx.textRendering = 'optimizeLegibility';
        ctx.imageSmoothingEnabled = true;
ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Get text metrics
        const textWidth = ctx.measureText(text).width;
        const textHeight = fontSize;
        
        // Create off-screen canvas to analyze text pixels
        const offscreenCanvas = document.createElement('canvas');
        const offscreenCtx = offscreenCanvas.getContext('2d');
        offscreenCanvas.width = textWidth + 20;
        offscreenCanvas.height = textHeight + 20;
        
        // Draw text on off-screen canvas
        offscreenCtx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
        offscreenCtx.textAlign = 'center';
        offscreenCtx.textBaseline = 'middle';
        offscreenCtx.fillStyle = 'white';
        offscreenCtx.fillText(text, offscreenCanvas.width/2, offscreenCanvas.height/2);
        
        // Get pixel data and create particles
        const imageData = offscreenCtx.getImageData(0, 0, offscreenCanvas.width, offscreenCanvas.height);
        const data = imageData.data;
        
        for (let y = 0; y < offscreenCanvas.height; y += particleSpacing) {
            for (let x = 0; x < offscreenCanvas.width; x += particleSpacing) {
                const index = (y * offscreenCanvas.width + x) * 4;
                if (data[index + 3] > 128) { // If pixel is not transparent
                    particles.push({
                        x: (canvas.width/2 - textWidth/2) + x,
                        y: (canvas.height/2 - textHeight/2) + y,
                        originX: (canvas.width/2 - textWidth/2) + x,
                        originY: (canvas.height/2 - textHeight/2) + y,
                        vx: 0,
                        vy: 0,
                        size: particleSize,
        color: '#FFFFFF'
});
                }
            }
        }
        
        // Mouse interaction
        let mouse = { x: null, y: null, isActive: false };
        // Handle both mouse and touch events
        const handlePointerMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const clientX = e.clientX || e.touches?.[0]?.clientX;
            const clientY = e.clientY || e.touches?.[0]?.clientY;
            
            if (clientX && clientY) {
                mouse.x = clientX - rect.left;
                mouse.y = clientY - rect.top;
                mouse.isActive = true;
            }
        };

        const handlePointerEnd = () => {
            mouse.isActive = false;
        };

        canvas.addEventListener('mousemove', handlePointerMove);
        canvas.addEventListener('touchmove', handlePointerMove, { passive: false });
        canvas.addEventListener('mouseleave', handlePointerEnd);
        canvas.addEventListener('touchend', handlePointerEnd);
// Animation loop
        function animate() {
            // High DPI canvas clearing
            ctx.save();
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.restore();
// Update particles
            particles.forEach(p => {
                // Calculate distance to mouse
                if (mouse.isActive) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < repulsionRadius) {
                        // Repel from mouse
                        const angle = Math.atan2(dy, dx);
                        const force = (repulsionRadius - distance) / repulsionRadius * repulsionForce;
                        p.vx += Math.cos(angle) * force;
                        p.vy += Math.sin(angle) * force;
                    }
                }
        // Attract to origin position (70x faster return)
        const ox = p.x - p.originX;
        const oy = p.y - p.originY;
        const odistance = Math.sqrt(ox * ox + oy * oy);
        
        if (odistance > 0) {
            const angle = Math.atan2(oy, ox);
            const force = Math.min(odistance, attractionRadius) / attractionRadius * (attractionForce * 20); 
            p.vx -= Math.cos(angle) * force;
            p.vy -= Math.sin(angle) * force;
        }
        
        // Apply friction (reduced to allow faster return)
        p.vx *= 0.9; // Lower friction value
        p.vy *= 0.9; // Lower friction value
// Update position
                p.x += p.vx;
                p.y += p.vy;
                
                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
            });
            
            requestAnimationFrame(animate);
        }
        
        animate();
    }
}