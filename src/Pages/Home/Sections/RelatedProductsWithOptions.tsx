import React, { useEffect, useState } from 'react';
import '../../../Style/RelatedProductsWithOptionsStyled.css';


interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const initialData = {
  success: true,
  products: [
    {
      productName: "Iphone 11 PRO MAX BRANCO 1",
      descriptionShort: "Iphone 11 PRO MAX BRANCO 1",
      photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      price: 15000
    },
    {
      productName: "IPHONE 13 MINI 1",
      descriptionShort: "IPHONE 13 MINI 1",
      photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      price: 9000
    },
    {
      productName: "Iphone 11 PRO MAX BRANCO 2",
      descriptionShort: "Iphone 11 PRO MAX BRANCO 2",
      photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      price: 14990
    },
    {
      productName: "IPHONE 13 MINI 2",
      descriptionShort: "IPHONE 13 MINI 2",
      photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      price: 12000
    },
    {
      productName: "Iphone 11 PRO MAX BRANCO 3",
      descriptionShort: "Iphone 11 PRO MAX BRANCO 3",
      photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      price: 4550
    },
    {
      productName: "IPHONE 13 MINI 3",
      descriptionShort: "IPHONE 13 MINI 3",
      photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      price: 38000
    },
    {
      productName: "Iphone 11 PRO MAX BRANCO 4",
      descriptionShort: "Iphone 11 PRO MAX BRANCO 4",
      photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      price: 42000
    },
    {
      productName: "IPHONE 13 MINI 4",
      descriptionShort: "IPHONE 13 MINI 4",
      photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      price: 520
    },
    {
      productName: "Iphone 11 PRO MAX BRANCO 5",
      descriptionShort: "Iphone 11 PRO MAX BRANCO 5",
      photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      price: 149990
    },
    {
      productName: "IPHONE 13 MINI 5",
      descriptionShort: "IPHONE 13 MINI 5",
      photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      price: 100000
    }
  ]
};

const RelatedProductsWithOptions: React.FC = () => {
  const [products] = useState<Product[]>(initialData.products);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : products.length - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < products.length - 4 ? prevIndex + 1 : 0));
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + 4);

  return (
    <section id="related-products">
      <header id = "headerRelatedProductsWithOptions">
      <article id = "articleHeaderRelatedProductsWithOptions">
        <p>____________________________________________</p>
        <h2>Produtos Relacionados</h2>
        <p>____________________________________________</p>
      </article>
        <nav>
          <ul className="category-list">
            <li><a href="#celular">CELULAR</a></li>
            <li><a href="#acessorios">ACESSÓRIOS</a></li>
            <li><a href="#tablets">TABLETS</a></li>
            <li><a href="#notebooks">NOTEBOOKS</a></li>
            <li><a href="#tvs">TVS</a></li>
            <li><a href="#ver-todos">VER TODOS</a></li>
          </ul>
        </nav>
      </header>
      <div className="carousel">
        <button className="carousel-button prev" onClick={handlePrevClick}>&#8249;</button>
        <section className="products">
          {visibleProducts.map((product, index) => (
            <article className="product-card" key={index}>
              <img src={product.photo} alt={product.productName} className="product-image" />
              <div className="product-details">
                <h3 className="product-name">{product.productName}</h3>
                <p className="product-description">{product.descriptionShort}</p>
                <p className="product-price">R$ {product.price.toFixed(2)}</p>
                <p className="product-installment">ou 2x de R$ {(product.price / 2).toFixed(2)} sem juros</p>
                <p className="product-freight">Frete grátis</p>
                <button className="buy-button">COMPRAR</button>
              </div>
            </article>
          ))}
        </section>
        <button className="carousel-button next" onClick={handleNextClick}>&#8250;</button>
      </div>
    </section>
  );
}

export default RelatedProductsWithOptions;
