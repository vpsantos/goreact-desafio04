import React from 'react';
import PropTypes from 'prop-types';

import CurrencyFormat from 'react-currency-format';

import { Container, Product } from './styles';

const ProductList = ({ products }) => (
  <Container>
    {products.map(product => (
      <Product key={product.id} to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <strong>{product.name}</strong>
        <small>{product.brand}</small>
        <span>
          <CurrencyFormat
            value={product.price}
            displayType="text"
            thousandSeparator="."
            prefix="R$"
            decimalSeparator=","
            decimalScale={2}
            fixedDecimalScale
          />
        </span>
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
