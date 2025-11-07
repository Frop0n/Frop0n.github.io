class MobileBehanceCarousel extends HTMLElement {
  constructor() {
    super();
    this.projects = [
      {
        title: "Papa John's",
        description: "Campaña digital completa",
        image: "http://static.photos/food/640x360/1",
        projectUrl: "https://www.behance.net/gallery/230425601/PAPA-JOHNS"
      },
      {
        title: "EntreJuegos Dossier",
        description: "Diseño de dossier",
        image: "http://static.photos/office/640x360/2",
        projectUrl: "https://www.behance.net/gallery/187073797/EntreJuegos-Dossier"
      },
      {
        title: "Sigrid y los Claveles",
        description: "Producción musical",
        image: "http://static.photos/music/640x360/3", 
        projectUrl: "https://www.behance.net/gallery/230426567/SIGRID-Y-LOS-CLAVELES"
      },
      {
        title: "Playbar",
        description: "Fotografía de producto",
        image: "http://static.photos/product/640x360/4",
        projectUrl: "https://www.behance.net/gallery/216815155/FOTOGRAFIA-DE-PRODUCTO-PLAYBAR"
      }
    ];
    this.currentIndex = 0;
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.render();
    this.setupCarousel();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          position: relative;
          padding: 0;
          margin: 0 auto;
        }
        
        .carousel-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          border-radius: 12px;
        }
        
        .carousel-track {
          display: flex;
          transition: transform 0.5s ease;
          height: 100%;
        }
        .slide {
            min-width: 100%;
            position: relative;
            padding-bottom: 75%; /* 4:3 aspect ratio */
        }
        
        .slide-content {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            flex-direction: column;
        }
        
        .slide-image {
            flex: 1;
            background-size: cover;
            background-position: center;
            border-radius: 8px 8px 0 0;
        }
        .slide-info-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: auto;
            min-height: 40%;
            background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4) 100%);
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 1.5rem;
            border-radius: 0 0 8px 8px;
        }
        .slide-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: white;
        }
        
        .slide-description {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.8);
          margin-bottom: 1rem;
        }
        
        .slide-link {
          display: inline-flex;
          align-items: center;
          background: rgba(59, 130, 246, 0.3);
          color: #93C5FD;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.9rem;
          border: 1px solid rgba(59, 130, 246, 0.5);
          transition: all 0.3s ease;
          margin-top: 0.5rem;
        }
        
        .slide-link:hover {
          background: rgba(59, 130, 246, 0.5);
          color: white;
          transform: translateX(5px);
          border-color: rgba(59, 130, 246, 0.8);
        }
.slide-link {
          display: inline-flex;
          align-items: center;
          background: rgba(59, 130, 246, 0.3);
          color: #93C5FD;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.9rem;
          border: 1px solid rgba(59, 130, 246, 0.5);
        }
        
        .carousel-nav {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        
        .nav-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          transition: all 0.3s ease;
        }
        
        .nav-dot.active {
          background: white;
          transform: scale(1.3);
        }
        .carousel-arrows {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          background: rgba(0,0,0,0.7);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          border: none;
          color: white;
          pointer-events: auto;
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
          opacity: 0.9;
        }
        
        .carousel-arrow:hover {
          background: rgba(0,0,0,0.9);
          transform: translateY(-50%) scale(1.1);
        }
        
        .carousel-arrow.prev {
          left: 15px;
        }
        
        .carousel-arrow.next {
          right: 15px;
        }
.carousel-arrow:disabled {
          opacity: 0.3;
          cursor: not-allowed;
          transform: translateY(-50%);
        }
        .carousel-arrow svg {
          width: 24px;
          height: 24px;
          stroke-width: 2.5px;
        }
=======
        @media (max-width: 480px) {
          .slide {
            padding-bottom: 120%; /* More space for content on very small screens */
          }
          
          .slide-info-overlay {
            padding: 1rem;
          }
          
          .slide-title {
            font-size: 1rem;
          }
          
          .slide-description {
            font-size: 0.8rem;
          }
          
          .slide-link {
            padding: 0.6rem 1.2rem;
            font-size: 0.85rem;
          }
        }
</style>
      <div class="carousel-container">
        <div class="section-title" style="text-align: center; margin-bottom: 2rem;">
          <h3 style="font-size: 1.5rem; font-weight: 700; color: white;">Nuestro último trabajo</h3>
        </div>
        <div class="carousel-track">
${this.projects.map(project => `
            <div class="slide">
                <div class="slide-content">
                <div class="slide-image" style="background-image: url('${project.image}')"></div>
                <div class="slide-info-overlay">
                  <h3 class="slide-title">${project.title}</h3>
                  <p class="slide-description">${project.description}</p>
                  <a href="${project.projectUrl}" target="_blank" class="slide-link">
                    Ver proyecto
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 0.5rem;">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
</div>
          `).join('')}
        </div>
        
        <div class="carousel-arrows">
          <button class="carousel-arrow prev" aria-label="Previous project">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          
          <button class="carousel-arrow next" aria-label="Next project">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
        
        <div class="carousel-nav">
          ${this.projects.map((_, i) => `
            <button class="nav-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Go to project ${i + 1}"></button>
          `).join('')}
        </div>
      </div>
    `;
  }

  setupCarousel() {
    const track = this.shadowRoot.querySelector('.carousel-track');
    const dots = this.shadowRoot.querySelectorAll('.nav-dot');
    const prevBtn = this.shadowRoot.querySelector('.prev');
    const nextBtn = this.shadowRoot.querySelector('.next');
    const slideCount = this.projects.length;
    
    const updateCarousel = () => {
      track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
      
      // Update dots
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === this.currentIndex);
      });
      
      // Update button states
      prevBtn.disabled = this.currentIndex === 0;
      nextBtn.disabled = this.currentIndex === slideCount - 1;
    };
    // Navigation handlers
    const prevBtns = [
      this.shadowRoot.querySelector('.prev'),
      this.shadowRoot.querySelector('.prev-btn')
    ];
    
    const nextBtns = [
      this.shadowRoot.querySelector('.next'),
      this.shadowRoot.querySelector('.next-btn')
    ];
    
    prevBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.currentIndex > 0) {
          this.currentIndex--;
          updateCarousel();
        }
      });
    });
    
    nextBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.currentIndex < slideCount - 1) {
          this.currentIndex++;
          updateCarousel();
        }
      });
    });
// Dot navigation
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        this.currentIndex = parseInt(dot.dataset.index);
        updateCarousel();
      });
    });
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    track.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
    
    const handleSwipe = () => {
      const threshold = 50; // Minimum swipe distance in pixels
      const difference = touchStartX - touchEndX;
      
      if (difference > threshold && this.currentIndex < slideCount - 1) {
        // Swipe left - next
        this.currentIndex++;
      } else if (difference < -threshold && this.currentIndex > 0) {
        // Swipe right - previous
        this.currentIndex--;
      }
      
      updateCarousel();
    };
    
    // Initialize
    updateCarousel();
  }
}
=======
  setupCarousel() {
    const track = this.shadowRoot.querySelector('.carousel-track');
    const dots = this.shadowRoot.querySelectorAll('.nav-dot');
    const prevBtn = this.shadowRoot.querySelector('.prev');
    const nextBtn = this.shadowRoot.querySelector('.next');
    const slideCount = this.projects.length;
    
    const updateCarousel = () => {
      track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
      
      // Update dots
      dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === this.currentIndex);
    });
    
    // Update button states
    prevBtn.disabled = this.currentIndex === 0;
    nextBtn.disabled = this.currentIndex === slideCount - 1;
    };
    
    // Navigation handlers
    prevBtn.addEventListener('click', () => {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        updateCarousel();
      }
    });
    
    nextBtn.addEventListener('click', () => {
      if (this.currentIndex < slideCount - 1) {
        this.currentIndex++;
        updateCarousel();
      }
    });
    
    // Dot navigation
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        this.currentIndex = parseInt(dot.dataset.index);
        updateCarousel();
      });
    });
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    track.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
    
    const handleSwipe = () => {
      const threshold = 50;
      const difference = touchStartX - touchEndX;
      
      if (difference > threshold && this.currentIndex < slideCount - 1) {
        this.currentIndex++;
      } else if (difference < -threshold && this.currentIndex > 0) {
        this.currentIndex--;
      }
      
      updateCarousel();
    };
    
    // Initialize
    updateCarousel();
  }
}
=======
<div class="carousel-nav">
          ${this.projects.map((_, i) => `
            <button class="nav-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Go to project ${i + 1}"></button>
          `).join('')}
        </div>
      </div>
    `;
  }

  setupCarousel() {
    const track = this.shadowRoot.querySelector('.carousel-track');
    const dots = this.shadowRoot.querySelectorAll('.nav-dot');
    const prevBtn = this.shadowRoot.querySelector('.prev');
    const nextBtn = this.shadowRoot.querySelector('.next');
    const slideCount = this.projects.length;
    
    const updateCarousel = () => {
      track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
      
      // Update dots
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === this.currentIndex);
      });
      
      // Update button states
      prevBtn.disabled = this.currentIndex === 0;
      nextBtn.disabled = this.currentIndex === slideCount - 1;
    };
    // Navigation handlers
    const prevBtns = [
      this.shadowRoot.querySelector('.prev'),
      this.shadowRoot.querySelector('.prev-btn')
    ];
    
    const nextBtns = [
      this.shadowRoot.querySelector('.next'),
      this.shadowRoot.querySelector('.next-btn')
    ];
    
    prevBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.currentIndex > 0) {
          this.currentIndex--;
          updateCarousel();
        }
      });
    });
    
    nextBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.currentIndex < slideCount - 1) {
          this.currentIndex++;
          updateCarousel();
        }
      });
    });
// Dot navigation
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        this.currentIndex = parseInt(dot.dataset.index);
        updateCarousel();
      });
    });
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    track.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
    
    const handleSwipe = () => {
      const threshold = 50; // Minimum swipe distance in pixels
      const difference = touchStartX - touchEndX;
      
      if (difference > threshold && this.currentIndex < slideCount - 1) {
        // Swipe left - next
        this.currentIndex++;
      } else if (difference < -threshold && this.currentIndex > 0) {
        // Swipe right - previous
        this.currentIndex--;
      }
      
      updateCarousel();
    };
    
    // Initialize
    updateCarousel();
  }
}

customElements.define('mobile-behance-carousel', MobileBehanceCarousel);