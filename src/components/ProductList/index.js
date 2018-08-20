import React from 'react';
import PropTypes from 'prop-types';

import { Container, Product } from './styles';

const ProductList = ({ products }) => (
  <Container>
    {products.map(product => (
      <Product key={product.id} to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <strong>{product.name}</strong>
        <small>{product.brand}</small>
        <span>{`R$${product.price}`}</span>
      </Product>
    ))}
  </Container>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      name: PropTypes.string,
      brand: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
};

export default ProductList;
