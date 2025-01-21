import React from 'react';
import logo from '../../../Assets/logo.png';
import ShoppingCart from '../../../Assets/ShoppingCart.png';
import favorites from '../../../Assets/favorites.png';
import profile from '../../../Assets/profile.png';
import orders from '../../../Assets/orders.png';
import header from '../../../Assets/header.png';
import '../../../Style/HeaderStyled.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-top">
        <img src={header} />
      </div>
      <div className="header-main">
        <img src={logo} alt="econverse logo" className="logo" />
        <input type="search" placeholder="O que você está buscando?" className="search-bar" />
        <div className="icons">
          <a href="#orders" className="icon"><img src={orders} alt="Pedidos" /></a>
          <a href="#favorites" className="icon"><img src={favorites} alt="Favoritos" /></a>
          <a href="#profile" className="icon"><img src={profile} alt="Perfil" /></a>
          <a href="#cart" className="icon"><img src={ShoppingCart} alt="Carrinho" /></a>
        </div>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="#categorias">TODAS CATEGORIAS</a></li>
          <li><a href="#supermercado">SUPERMERCADO</a></li>
          <li><a href="#livros">LIVROS</a></li>
          <li><a href="#moda">MODA</a></li>
          <li><a href="#lancamentos">LANÇAMENTOS</a></li>
          <li><a href="#ofertas">OFERTAS DO DIA</a></li>
          <li><a href="#assinatura">ASSINATURA</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
