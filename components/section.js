class SectionComponent extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 5rem 2rem;
          position: relative;
        }
        
        .section-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
          color: white;
          font-weight: 700;
        }
        
        .section-subtitle {
          font-size: 1.25rem;
          color: rgba(255,255,255,0.8);
          text-align: center;
          max-width: 700px;
          margin: 0 auto 3rem;
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          :host {
            padding: 3rem 1rem;
          }
          
          .section-title {
            font-size: 2rem;
            margin-bottom: 2rem;
          }
        }
      </style>
      
      <div class="section-container">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('custom-section', SectionComponent);