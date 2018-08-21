import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import CurrencyFormat from 'react-currency-format';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductActions } from '../../store/ducks/product';
import { Creators as CartActions } from '../../store/ducks/cart';

import {
  Container, ImageContainer, Info, Button,
} from './styles';

import Loading from '../../components/Loading';

class Product extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
    product: PropTypes.shape({
      data: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        brand: PropTypes.string,
        price: PropTypes.number,
      }),
      loading: PropTypes.bool,
    }).isRequired,
    getProductRequest: PropTypes.func.isRequired,
    addProduct: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.loadProductDetails();
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;

    if (prevProps.match.params.id !== match.params.id) {
      this.loadProductDetails();
    }
  }

  loadProductDetails = () => {
    const { match, getProductRequest } = this.props;

    getProductRequest(match.params.id);
  };

  render() {
    const { product, addProduct } = this.props;

    return (
      <Fragment>
        {product.loading ? (
          <Container loading>
            <Loading />
          </Container>
        ) : (
          <Container>
            <ImageContainer>
              <img src={product.data.image} alt={product.data.name} />
            </ImageContainer>
            <Info>
              <strong>{product.data.name}</strong>
              <small>{product.data.brand}</small>
              <span><CurrencyFormat
                  value={product.data.price}
                  displayType="text"
                  thousandSeparator="."
                  prefix="R$"
                  decimalSeparator=","
                  decimalScale={2}
                  fixedDecimalScale
                />
              </span>
              <Button
                onClick={() => {
                  addProduct(product.data);
                }}
                to="/cart"
              >
                Adicionar ao carrinho
              </Button>
            </Info>
          </Container>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  product: state.product,
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ProductActions, ...CartActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);
