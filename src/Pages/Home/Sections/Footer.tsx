import React from 'react';
import logo from '../../../Assets/logo.png';
import instagramIcon from '../../../Assets/instagram.png';
import facebookIcon from '../../../Assets/facebook.png';
import linkedinIcon from '../../../Assets/linkedin.png';
import '../../../Style/FooterStyled.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <section className="newsletter-section">
        <div id = "footerTitle">
            <h2>Inscreva-se na nossa newsletter</h2>
            <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos</p>
            <p>da Econverse.</p>
        </div>
        <form id = "forms">
            <div id = "textNameAndTerms">
                <input type="text" className= "inputFooter" placeholder="Digite seu nome" />
                <div className="terms">
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms">Aceito os termos e condições</label>
                </div>
            </div>
            <input type="email" className= "inputFooter" placeholder="Digite seu e-mail" />
            <button type="submit" id = "buttonSubmitFooter">INSCREVER</button>
        </form>
      </section>
      <section className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="econverse logo" />
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <p>adipiscing elit.</p>
          <div className="social-media">
            <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
            <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
            <a href="#"><img src={linkedinIcon} alt="LinkedIn" /></a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h3>Institucional</h3>
            <ul>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Movimento</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
            </ul>
          </div>
          <div>
            <h3>Ajuda</h3>
            <ul>
              <li><a href="#">Suporte</a></li>
              <li><a href="#">Fale Conosco</a></li>
              <li><a href="#">Perguntas Frequentes</a></li>
            </ul>
          </div>
          <div>
            <h3>Termos</h3>
            <ul>
              <li><a href="#">Termos e Condições</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Troca e Devolução</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="footer-bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
    </footer>
  );
}

export default Footer;
