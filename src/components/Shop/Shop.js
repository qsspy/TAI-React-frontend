import React from 'react';
import styles from './Shop.module.css';
import CategoryList from '../CategoryList/CategoryList';
import ProductList from '../ProductList/ProductList';

export default class Shop extends React.Component {

  state = {
    categoryId: 0
  }

  handleChangedCategory(id) {
    this.setState({ categoryId: id })
  }

  render() {
    return (
      <div>
        <CategoryList onCategorySelect={(id) => this.handleChangedCategory(id)} />
        <ProductList key={this.state.categoryId} categoryId={this.state.categoryId} />
      </div>
    );
  }
}


