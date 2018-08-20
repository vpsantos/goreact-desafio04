import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CategoriesActions } from '../../store/ducks/categories';
import { Creators as CategoryProductActions } from '../../store/ducks/categoryProducts';
import { Creators as CartActions } from '../../store/ducks/cart';

import {
  Container, Info, Title, Nav, LinkItem,
} from './styles';

class Header extends Component {
  static propTypes = {
    categories: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        }),
      ),
    }).isRequired,
    getCategoriesRequest: PropTypes.func.isRequired,
    cart: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape()),
    }).isRequired,
    categoryId: PropTypes.number.isRequired,
  };

  componentDidMount() {
    const { getCategoriesRequest } = this.props;

    getCategoriesRequest();
  }

  render() {
    const { categories, cart, categoryId } = this.props;

    return (
      <Container>
        <Info>
          <h1>
            <Title to="/">GoCommerce</Title>
          </h1>
          <Link to="/cart">
            <i className="fa fa-shopping-cart" />
            Meu carrinho ({cart.data.length})
          </Link>
        </Info>

        <Nav>
          <ul>
            {categories.data.map(category => (
              <li key={category.id}>
                <LinkItem
                  to={`/categories/${category.id}`}
                  activeClassName="active"
                  active={category.id === categoryId}
                >
                  {category.title}
                </LinkItem>
              </li>
            ))}
          </ul>
        </Nav>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  categoryId: state.categoryProducts.id,
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...CategoriesActions, ...CategoryProductActions, ...CartActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
