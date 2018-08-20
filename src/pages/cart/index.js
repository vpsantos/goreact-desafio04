import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from '../../store/ducks/cart';

import {
  Container, ListContainer, List, Total, Message,
} from './styles';

const Cart = ({ cart, updateProduct, removeProduct }) => (
  <Container>
    {!cart.data.length ? (
      <Message>Não há produtos no carrinho</Message>
    ) : (
      <Fragment>
        <ListContainer>
          <List cellPadding={0} cellSpacing={0}>
            <thead>
              <tr>
                <th width={60} />
                <th>Produto</th>
                <th width={116}>Valor</th>
                <th width={70}>Qtd</th>
                <th width={127}>Subtotal</th>
                <th width={13} />
              </tr>
            </thead>

            <tbody>
              {cart.data.map(product => (
                <tr key={product.id}>
                  <td>
                    <img src={product.image} alt={product.name} />
                  </td>
                  <td>
                    <strong>{product.name}</strong>
                    <small>{product.brand}</small>
                  </td>
                  <td>
                    <span>{`R$${product.price}`}</span>
                  </td>
                  <td>
                    <input
                      type="number"
                      defaultValue={product.quantity}
                      min={1}
                      onChange={(e) => {
                        updateProduct(product.id, e.target.value);
                      }}
                    />
                  </td>
                  <td>
                    <span>{`R$${product.subtotal}`}</span>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        removeProduct(product);
                      }}
                      type="button"
                    >
                      <i className="fa fa-times" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </List>
        </ListContainer>
        <Total>
          <strong>Total</strong>
          <span>{`R$${cart.total}`}</span>
        </Total>
      </Fragment>
    )}
  </Container>
);

Cart.propTypes = {
  cart: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        image: PropTypes.string,
        name: PropTypes.string,
        brand: PropTypes.string,
        price: PropTypes.number,
        quantity: PropTypes.any,
        subtotal: PropTypes.any,
      }),
    ),
    total: PropTypes.any.isRequired,
  }).isRequired,
  removeProduct: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
