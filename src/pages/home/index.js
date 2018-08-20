import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CategoriesActions } from '../../store/ducks/categories';
import { Creators as CategoryProductsActions } from '../../store/ducks/categoryProducts';

import Loading from '../../components/Loading';
import ProductList from '../../components/ProductList';

import { Container } from './styles';

class Home extends Component {
  static propTypes = {
    categories: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
        }),
      ),
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

  categoriesLoaded = false;

  componentDidMount() {
    const { categories } = this.props;

    if (categories.data.length > 0) {
      this.categoriesLoaded = true;

      this.loadCategoryProducts();
    }
  }

  componentDidUpdate() {
    if (!this.categoriesLoaded) {
      const { categories } = this.props;

      if (categories.data.length > 0) {
        this.categoriesLoaded = true;

        this.loadCategoryProducts();
      }
    }
  }

  loadCategoryProducts = () => {
    const { categories, getCategoryProductsRequest } = this.props;

    getCategoryProductsRequest(categories.data[0].id);
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
  categories: state.categories,
  categoryProducts: state.categoryProducts,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...CategoriesActions, ...CategoryProductsActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
