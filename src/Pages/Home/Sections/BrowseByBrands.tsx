import React from 'react';
import brands from '../../../Assets/group.png';
import '../../../Style/BrowseByBrandsStyled.css';

const BrowseByBrands: React.FC = () => {
  return (
    <section className="partners-section-BrowseByBrands">
      <div className="brand-image">
        <h2>Navegue por Marcas</h2>
        <img src={brands} alt="Marcas" />
        <img src={brands} alt="Marcas" />
        <img src={brands} alt="Marcas" />
        <img src={brands} alt="Marcas" />
        <img src={brands} alt="Marcas" />
      </div>
    </section>
  );
}

export default BrowseByBrands;

