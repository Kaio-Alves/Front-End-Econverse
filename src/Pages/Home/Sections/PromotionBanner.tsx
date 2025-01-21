import React from 'react';
import '../../../Style/PromotionBannerStyled.css';


const PromotionBanner: React.FC = () => {
  return (
    <section id = "mainPromotionBanner">
        <article id = "articlePromotionBanner">
            <header>
                <h2>Venha conhecer nossas</h2>
                <h2>promoções</h2>
            </header>
            <p>
                <strong class="highlight-yellow">50% off</strong> nos produtos
            </p>
            <button>Ver produto</button>
        </article>
    </section>
  );
}

export default PromotionBanner;
