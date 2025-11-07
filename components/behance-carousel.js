class BehanceCarousel extends HTMLElement {
  constructor() {
    super();
    this.projects = [
      {
        title: "Papa John's",
        description: "Campaña digital completa",
        embedUrl: "https://www.behance.net/embed/project/230425601?ilo0=1",
        projectUrl: "https://www.behance.net/gallery/230425601/PAPA-JOHNS"
      },
      {
        title: "EntreJuegos Dossier",
        description: "Diseño de dossier",
        embedUrl: "https://www.behance.net/embed/project/187073797?ilo0=1",
        projectUrl: "https://www.behance.net/gallery/187073797/EntreJuegos-Dossier"
      },
      {
        title: "Sigrid y los Claveles",
        description: "Producción musical",
        embedUrl: "https://www.behance.net/embed/project/230426567?ilo0=1",
        projectUrl: "https://www.behance.net/gallery/230426567/SIGRID-Y-LOS-CLAVELES"
      },
      {
        title: "Playbar",
        description: "Fotografía de producto",
        embedUrl: "https://www.behance.net/embed/project/216815155?ilo0=1",
        projectUrl: "https://www.behance.net/gallery/216815155/FOTOGRAFIA-DE-PRODUCTO-PLAYBAR"
      },
      {
        title: "Chilmex",
        description: "Diseño de marca",
        embedUrl: "https://www.behance.net/embed/project/229427269?ilo0=1",
        projectUrl: "https://www.behance.net/gallery/229427269/CHILMEX"
      },
      {
        title: "Premier Novias",
        description: "Sesión de fotos",
        embedUrl: "https://www.behance.net/embed/project/216814547?ilo0=1",
        projectUrl: "https://www.behance.net/gallery/216814547/SESION-DE-FOTOS-PREMIER-NOVIAS"
      },
      {
        title: "Kheper Catálogo",
        description: "Diseño de catálogo",
        embedUrl: "https://www.behance.net/embed/project/187146101?ilo0=1",
        projectUrl: "https://www.behance.net/gallery/187146101/Kheper-Catalogo"
      }
    ];
    this.currentIndex = 0;
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.render();
    this.initCarousel();
    this.startAutoRotate();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: relative;
          width: 90vw;
          height: 60vh;
          margin: 0 auto;
          left: 0;
          perspective: 1000px;
          background: #000;
          overflow: hidden;
        }
        .carousel-container {
          position: relative;
          width: 100%;
          height: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
          border-radius: 0;
        }
.project-slide {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1.2s ease;
          z-index: 1;
          pointer-events: none;
        }
        
        .project-slide.active {
          opacity: 1;
          z-index: 3;
          pointer-events: auto;
          display: grid;
        }
        
        .project-slide.prev,
        .project-slide.next {
          opacity: 0;
          z-index: 2;
        }
.project-iframe {
          width: 100%;
          height: 100%;
          border: none;
          background: #000;
          overflow: hidden !important;
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
          border-radius: 0;
        }
.project-iframe::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
.project-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem;
          background: rgba(0,0,0,0.9);
          height: 100%;
          border-left: 1px solid rgba(255,255,255,0.1);
        }
.project-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: white;
        }
        
        .project-description {
          color: rgba(255,255,255,0.8);
          margin-bottom: 1rem;
        }
        .project-link {
          display: inline-flex;
          align-items: center;
          background: rgba(59, 130, 246, 0.2);
          color: #3B82F6;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          border: 1px solid rgba(59, 130, 246, 0.3);
          backdrop-filter: blur(5px);
        }
        
        .project-link:hover {
          background: rgba(59, 130, 246, 0.3);
          color: #93C5FD;
          transform: translateX(5px);
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.2);
        }
        .carousel-nav {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 1.5rem;
        }
.nav-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .nav-dot.active {
          background: white;
          transform: scale(1.2);
        }
        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 80px;
          height: 80px;
          background: rgba(0,0,0,0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255,255,255,0.1);
        }
.carousel-arrow:hover {
          background: rgba(59, 130, 246, 0.7);
          transform: translateY(-50%) scale(1.1);
          border-color: rgba(255,255,255,0.3);
        }
        
        .carousel-arrow::before {
          content: '';
          position: absolute;
          width: 12px;
          height: 12px;
          border-top: 2px solid white;
          border-left: 2px solid white;
          transform: rotate(-45deg);
          left: 22px;
        }
        
        .carousel-arrow.next::before {
          transform: rotate(135deg);
          left: auto;
          right: 22px;
        }
        
        .carousel-arrow i {
          display: none;
        }
        .carousel-arrow.prev {
          left: 10px;
        }
        
        .carousel-arrow.next {
          right: calc(33.33% + 10px);
        }
.carousel-arrow:hover::before {
          border-color: white;
        }
        @media (max-width: 768px) {
          :host {
            height: 50vh;
            width: 95vw;
          }
          
          .carousel-container {
            height: 100%;
          }
.project-info {
            padding: 1rem;
          }
          
          .project-title {
            font-size: 1.25rem;
          }
          
          .carousel-arrow {
            width: 50px;
            height: 50px;
          }
          
          .carousel-arrow::before {
            width: 10px;
            height: 10px;
            left: 18px;
          }
          
          .carousel-arrow.next::before {
            right: 18px;
          }
          
          .project-slide.prev {
            transform: translateX(-25%) scale(0.85);
          }
          
          .project-slide.next {
            transform: translateX(25%) scale(0.85);
          }
        }
</style>
      
      <div class="carousel-container">
        <div class="carousel-arrow prev">
          <i data-feather="chevron-left"></i>
        </div>
        
        ${this.projects.map((project, index) => `
          <div class="project-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
            <iframe 
              class="project-iframe"
              src="${project.embedUrl}" 
              allowfullscreen
              frameborder="0" 
              allow="clipboard-write" 
              refererpolicy="strict-origin-when-cross-origin"
              scrolling="no"
              style="overflow: hidden;"
            ></iframe>
            <div class="project-info">
              <h3 class="project-title">${project.title}</h3>
              <p class="project-description">${project.description}</p>
              <a href="${project.projectUrl}" target="_blank" class="project-link">
                Ver proyecto completo
                <i data-feather="external-link" class="ml-2"></i>
              </a>
            </div>
          </div>
`).join('')}
        
        <div class="carousel-arrow next">
          <i data-feather="chevron-right"></i>
        </div>
</div>
    `;
    
    // Initialize feather icons
    if (window.feather) {
      window.feather.replace();
    }
  }

  initCarousel() {
    const prevBtn = this.shadowRoot.querySelector('.prev');
    const nextBtn = this.shadowRoot.querySelector('.next');
    const dots = this.shadowRoot.querySelectorAll('.nav-dot');
    
    prevBtn.addEventListener('click', () => this.prevSlide());
    nextBtn.addEventListener('click', () => this.nextSlide());
    
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        this.goToSlide(parseInt(dot.dataset.index));
      });
    });
  }

  updateCarousel() {
    const slides = this.shadowRoot.querySelectorAll('.project-slide');
    const dots = this.shadowRoot.querySelectorAll('.nav-dot');
    
    slides.forEach((slide, index) => {
      slide.classList.remove('active', 'prev', 'next');
      
      if (index === this.currentIndex) {
        slide.classList.add('active');
      } else if (
        (index === this.currentIndex - 1) ||
        (index === slides.length - 1 && this.currentIndex === 0)
      ) {
        slide.classList.add('prev');
      } else if (
        (index === this.currentIndex + 1) ||
        (index === 0 && this.currentIndex === slides.length - 1)
      ) {
        slide.classList.add('next');
      }
    });
    
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentIndex);
    });
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    this.updateCarousel();
    this.resetAutoRotate();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    this.updateCarousel();
    this.resetAutoRotate();
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateCarousel();
    this.resetAutoRotate();
  }

  startAutoRotate() {
    this.autoRotateInterval = setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  resetAutoRotate() {
    clearInterval(this.autoRotateInterval);
    this.startAutoRotate();
  }
}

customElements.define('behance-carousel', BehanceCarousel);