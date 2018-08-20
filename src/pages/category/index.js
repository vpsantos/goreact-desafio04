import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CategoryProductsActions } from '../../store/ducks/categoryProducts';

import Loading from '../../components/Loading';
import ProductList from '../../components/ProductList';

import { Container } from './styles';

class Category extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
    categoryProducts: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          image: PropTypes.string,
          name: PropTypes.string,
          brand: PropTypes.string,
          price: PropTypes.number,
        }),
      ),
      loading: PropTypes.bool,
    }).isRequired,
    getCategoryProductsRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.loadCategoryProducts();
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;

    if (prevProps.match.params.id !== match.params.id) {
      this.loadCategoryProducts();
    }
  }

  loadCategoryProducts = () => {
    const { match, getCategoryProductsRequest } = this.props;

    getCategoryProductsRequest(match.params.id);
  };

  render() {
    const { categoryProducts } = this.props;

    return (
      <Fragment>
        {categoryProducts.loading ? (
          <Container loading>
            <Loading />
          </Container>
        ) : (
          <Container>
            <ProductList products={categoryProducts.data} />
          </Container>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  categoryProducts: state.categoryProducts,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoryProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Category);
