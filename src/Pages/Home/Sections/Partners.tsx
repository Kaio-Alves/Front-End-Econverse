import React from 'react';
import partners from '../../../Assets/partners.png';
import '../../../Style/PertnersStyled.css';

const Pertners: React.FC = () => {
  return (
    <section className="partners-section">
      <div className="partner-image">
        <img src={partners} alt="Parceiro 1" />
      </div>
      <div className="partner-image">
        <img src={partners} alt="Parceiro 2" />
      </div>
    </section>
  );
}

export default Pertners;

