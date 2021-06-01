import React from 'react';
import styles from './ProductList.module.css';
import axios from 'axios';
import { env } from '../../environment';
import Product from '../Product/Product';


const api = axios.create({
  baseURL: env.serverUrl
})

export default class ProductList extends React.Component {

  state = {
    products: []
  }

  componentDidMount() {
    let subpath = '/api/products'
    if(this.props.categoryId != 0) {
      subpath += `?categoryId=${this.props.categoryId}`
    }

    api.get(subpath).then(res => {
      this.setState({products: res.data})
    })
  }

  render() {

    if(this.state.products.length != 0) {
      return (
        <div className="d-flex flex-wrap justify-content-center">
          {this.state.products.map(product=> 
          <div key={product.id} className={styles.child__product}>
            <Product product={product}/>
          </div>)}
        </div>
      );
    } 

    return <div></div>
  }
}
