import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountdownSection from './CountdownSection';
import './App.css';

// Componente para animaciones de aparición
const AnimatedSection = ({ children, animation = 'fadeUp', delay = 0, className = '', ...props }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`animated-element ${animation} ${inView ? 'animate-in' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };
  
  return (
    <div className="app">
      {/* COUNTDOWN SECTION */}
      <CountdownSection />
      
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <div className={`nav-menu ${mobileMenuOpen ? 'nav-menu-open' : ''}`}>
            <button className="nav-link" onClick={() => scrollToSection('inicio')}>Inicio</button>
            <button className="nav-link" onClick={() => scrollToSection('save-date')}>Save the Date</button>
            <button className="nav-link" onClick={() => scrollToSection('misa')}>Misa</button>
            <button className="nav-link" onClick={() => scrollToSection('prom')}>Prom</button>
            <button className="nav-link" onClick={() => scrollToSection('dress-code')}>Dress Code</button>
          </div>
          
          <div className="nav-hamburger" onClick={toggleMobileMenu}>
            <span className={`hamburger-line ${mobileMenuOpen ? 'line-1-active' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'line-2-active' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'line-3-active' : ''}`}></span>
          </div>
        </div>
      </nav>
      
      {/* PÁGINA PRINCIPAL */}
      <div id="inicio" className="content">
        <div className="center-group">
          <AnimatedSection animation="fadeDown" delay={100} className="header-text">
            TECNOLÓGICO DE MONTERREY
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={300} className="main-text">
            LEM129
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fadeUp" delay={500} className="footer-text">
          VEINTINUEVE DE JUNIO DEL DOSMILVEINTICINCO
        </AnimatedSection>
      </div>

      {/* SAVE THE DATE SECTION */}
      <div id="save-date" className="save-the-date-section">
        <div className="save-the-date-content">
          <AnimatedSection animation="fadeUp" delay={100} className="save-text">
            Save
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={200} className="the-date-text">
            the Date
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={300} className="icon-container">
            <img src="/svg/icono.svg" alt="Ícono" className="date-icon" />
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={400} className="photo-container">
            <img src="/lem.jpg" alt="LEM129 Graduación" className="graduation-photo" />
          </AnimatedSection>
        </div>
      </div>

      {/* MISA DE ACCIÓN DE GRACIAS SECTION */}
      <div id="misa" className="misa-section">
        <div className="misa-content">
          <AnimatedSection animation="fadeUp" delay={100} className="misa-title-group">
            <div className="misa-title-line1">Misa de Acción de </div>
            <div className="misa-title-line2">Gracias</div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={200} className="misa-date-group">
            <div className="misa-date">Sábado 08 Junio</div>
            <div className="misa-time">a las 12:00 pm</div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={300} className="misa-church-icon">
            <div className="vertical-line-top"></div>
            <img src="/iglesia.png" alt="Iglesia" className="church-illustration" />
            <div className="vertical-line-bottom"></div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={400} className="misa-location">
            Juan Zuazua 1100 Sur, Centro,<br />
            64000 Monterrey, N.L.
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={500} className="misa-location-button">
            VER UBICACIÓN
          </AnimatedSection>
        </div>
      </div>

      {/* FUENTE SECTION */}
      <div id="prom" className="fuente-section">
        <div className="fuente-content">
          <AnimatedSection animation="fadeUp" delay={100} className="fuente-title-group">
            <div className="fuente-top-line">
              <div className="fuente-the">The</div>
              <div className="fuente-prom">PROM</div>
            </div>
            <div className="fuente-lem">LEM 129</div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={200} className="fuente-date-group">
            <div className="fuente-month">JUNIO</div>
            <div className="date-separator-line"></div>
            <div className="fuente-day">08</div>
            <div className="date-separator-line"></div>
            <div className="fuente-year">2025</div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={300} className="fuente-image-container">
            <img src="/fuente.png" alt="Fuente" className="fuente-illustration" />
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={400} className="fuente-venue">
            STOCK AND WOODS
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={500} className="fuente-location">
            Carr Nacional, El Faisán, 67302 Santiago, N.L.
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={600} className="fuente-location-button">
            VER UBICACIÓN
          </AnimatedSection>
        </div>
      </div>

      {/* DRESS CODE SECTION */}
      <div id="dress-code" className="dress-code-section">
        <div className="dress-code-content">
          <AnimatedSection animation="fadeUp" delay={100} className="dress-code-title">
            <div className="dress-text">DRESS</div>
            <div className="code-text">CODE</div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={200} className="dress-code-info">
            <div className="dress-event-group">
              <div className="dress-event-title">MISA DE GRADUACIÓN</div>
              <div className="dress-event-desc">Vestimenta Casual</div>
            </div>
            
            <div className="dress-event-group">
              <div className="dress-event-title">FIESTA DE GRADUACIÓN</div>
              <div className="dress-event-desc">Vestimenta Formal</div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={300} className="dress-code-image">
            <img src="/pareja.png" alt="Dress Code" className="couple-illustration" />
          </AnimatedSection>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <AnimatedSection animation="fadeUp" delay={100} className="footer-logo">
            <img src="/eurofialogo.png" alt="Euforia Logo" className="footer-logo-img" />
          </AnimatedSection>
        </div>
        <div className="footer-bottom">
          <AnimatedSection animation="fadeUp" delay={200}>
            <p>&copy; 2025 LEM129. Todos los derechos reservados.</p>
          </AnimatedSection>
        </div>
      </footer>
    </div>
  );
}

export default App;
