class AboutSection extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 4rem 1rem;
          background: linear-gradient(135deg, #111827 0%, #1e293b 100%);
          color: white;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(90deg, #3B82F6, #8B5CF6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        .card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #3B82F6;
        }
        .services ul {
          list-style: none;
          padding-left: 0;
        }
        .services li {
          margin-bottom: 0.5rem;
          position: relative;
          padding-left: 1.5rem;
        }
        .services li:before {
          content: "•";
          color: #8B5CF6;
          position: absolute;
          left: 0;
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }
        .team-member {
          text-align: center;
        }
        .team-member img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 0.5rem;
          border: 2px solid #3B82F6;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .contact-item i {
          font-size: 1.2rem;
        }
        .highlight {
          color: #8B5CF6;
          font-weight: 700;
        }
      </style>
      <div class="container">
        <h2>Sobre Bolsillo Producciones</h2>
        
        <div class="grid">
          <div class="card">
            <h3>Nuestra Misión</h3>
            <p>En <span class="highlight">Bolsillo Producciones SPA</span> conectamos soluciones con personas a través del poder del contenido audiovisual y estrategias digitales personalizadas. Somos el puente entre tu marca y tu audiencia, creando experiencias memorables que generan impacto real.</p>
            <p>Nos especializamos en transformar ideas en historias visuales cautivadoras y desarrollar planes de marketing digital que realmente funcionan para empresas y emprendimientos en crecimiento.</p>
          </div>
          
          <div class="card services">
            <h3>Nuestros Servicios</h3>
            <ul>
              <li><strong>Producción Audiovisual:</strong> Videos corporativos, capacitaciones, documentales, cobertura de eventos, contenido para redes sociales y más.</li>
              <li><strong>Marketing Digital:</strong> Estrategias personalizadas, gestión de redes sociales, campañas publicitarias y análisis de resultados.</li>
              <li><strong>Identidad de Marca:</strong> Desarrollo de imagen corporativa, diseño gráfico y storytelling para fortalecer tu presencia digital.</li>
              <li><strong>Capacitaciones:</strong> Entrenamos a tu equipo en creación de contenido y manejo de herramientas digitales.</li>
            </ul>
          </div>
          
          <div class="card">
            <h3>Nuestro Proceso</h3>
            <ol>
              <li><strong>Briefing:</strong> Entendemos tus necesidades y objetivos.</li>
              <li><strong>Conceptualización:</strong> Creamos una propuesta creativa adaptada a ti.</li>
              <li><strong>Producción:</strong> Ejecutamos con los más altos estándares de calidad.</li>
              <li><strong>Entrega:</strong> Material listo para impactar a tu audiencia.</li>
              <li><strong>Evaluación:</strong> Medimos resultados y optimizamos estrategias.</li>
            </ol>
          </div>
          
          <div class="card">
            <h3>Nuestro Equipo</h3>
            <p>Somos un equipo multidisciplinario de profesionales apasionados por contar historias:</p>
            <div class="team-grid">
              <div class="team-member">
                <img src="http://static.photos/people/120x120/1" alt="Director Creativo">
                <div>Director Creativo</div>
              </div>
              <div class="team-member">
                <img src="http://static.photos/people/120x120/2" alt="Productor Audiovisual">
                <div>Productor Audiovisual</div>
              </div>
              <div class="team-member">
                <img src="http://static.photos/people/120x120/3" alt="Estratega Digital">
                <div>Estratega Digital</div>
              </div>
              <div class="team-member">
                <img src="http://static.photos/people/120x120/4" alt="Diseñador Gráfico">
                <div>Diseñador Gráfico</div>
              </div>
            </div>
          </div>
          
          <div class="card">
            <h3>¿Para quién trabajamos?</h3>
            <p>Nos especializamos en apoyar a:</p>
            <ul>
              <li>Empresas de la Región Metropolitana que buscan profesionalizar su imagen</li>
              <li>Emprendimientos en etapa de crecimiento</li>
              <li>Marcas que necesitan fortalecer su identidad digital</li>
              <li>Organizaciones que quieren comunicar mejor sus valores</li>
            </ul>
          </div>
          
          <div class="card">
            <h3>Nuestro Diferencial</h3>
            <ul>
              <li><strong>Enfoque humano:</strong> Entendemos a las personas detrás de cada proyecto.</li>
              <li><strong>Adaptabilidad:</strong> Soluciones a medida para cada etapa de tu negocio.</li>
              <li><strong>Resultados medibles:</strong> Nos preocupamos por el impacto real.</li>
              <li><strong>Creatividad estratégica:</strong> Belleza visual con propósito comercial.</li>
            </ul>
          </div>
          
          <div class="card">
            <h3>Contáctanos</h3>
            <div class="contact-info">
              <div class="contact-item">
                <i data-feather="mail"></i>
                <span>hola@bolsilloproducciones.cl</span>
              </div>
              <div class="contact-item">
                <i data-feather="phone"></i>
                <span>+56 9 1234 5678 (WhatsApp)</span>
              </div>
              <div class="contact-item">
                <i data-feather="map-pin"></i>
                <span>Región Metropolitana, Santiago de Chile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    // Initialize Feather icons
    if (window.feather) {
      window.feather.replace({ class: 'feather-icon' });
    }
  }
}

customElements.define('about-section', AboutSection);
