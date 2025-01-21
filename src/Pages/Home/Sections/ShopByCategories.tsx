import React from 'react';
import '../../../Style/ShopByCategoriesStyled.css';
import technology from '../../../Assets/tec.png';
import supermarket from '../../../Assets/supermarket.png';
import drinks from '../../../Assets/drinks.png';
import tools from '../../../Assets/tools.png';
import health from '../../../Assets/health.png';
import fitness from '../../../Assets/fitness.png';
import fashion from '../../../Assets/fashion.png';

const ShopByCategories: React.FC = () => {
  return (
    <section id="mainShopByCategories">
      <nav>
        <ul>
          <li>
            <a href="#technology">
              <span className="imageShopByCategories"><img src={technology} alt="technology" /></span>
              <span className="category-name">Tecnologia</span>
            </a>
          </li>
          <li>
            <a href="#supermarket">
              <span className="imageShopByCategories"><img src={supermarket} alt="supermarket" /></span>
              <span className="category-name">Supermercado</span>
            </a>
          </li>
          <li>
            <a href="#drinks">
              <span className="imageShopByCategories"><img src={drinks} alt="drinks" /></span>
              <span className="category-name">Bebidas</span>
            </a>
          </li>
          <li>
            <a href="#tools">
              <span className="imageShopByCategories"><img src={tools} alt="tools" /></span>
              <span className="category-name">Ferramentas</span>
            </a>
          </li>
          <li>
            <a href="#health">
              <span className="imageShopByCategories"><img src={health} alt="health" /></span>
              <span className="category-name">Saúde</span>
            </a>
          </li>
          <li>
            <a href="#esportes-e-fitness">
              <span className="imageShopByCategories"><img src={fitness} alt="fitness" /></span>
              <span className="category-name">Esportes e Fitness</span>
            </a>
          </li>
          <li>
            <a href="#fashion">
              <span className="imageShopByCategories"><img src={fashion} alt="fashion" /></span>
              <span className="category-name">Moda</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default ShopByCategories;
