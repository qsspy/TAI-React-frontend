
import './global-styles/reset.css'
import "bootstrap/dist/css/bootstrap.min.css";
import './global-styles/topography.css'
import './global-styles/App.css';
import CategoryList from './components/CategoryList/CategoryList'
import ProductList from './components/ProductList/ProductList';
import React from 'react'
import Header from './components/Header/Header'


export default class App extends React.Component {

  state = {
    categoryId: 0
  }

  render() {
    return (

      <div className="body">
        <div className="header container d-flex justify-content-center border bg-white">
          <Header />
        </div>
        <div className="sub-body container bg-void py-3">
          <CategoryList onCategorySelect={(id) => this.handleChangedCategory(id)} />
          <ProductList key={this.state.categoryId} categoryId={this.state.categoryId} />
        </div>
      </div>
    );
  }

  handleChangedCategory(id) {
    this.setState({ categoryId: id })
  }
}
