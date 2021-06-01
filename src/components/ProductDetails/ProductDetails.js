import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductDetails.module.css';
import axios from 'axios';
import { env } from '../../environment';

const api = axios.create({
  baseURL: env.serverUrl
})

export default class ProductDetails extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      productId: props.match.params.id
    }
  }

  componentDidMount() {

    api.get(`/api/products/${this.state.productId}`).then(res=>{
      this.setState({product: res.data})
    })
  }

  render() {
    if(this.state.product) {
      return (
        <div>
          {this.state.product.name}
        </div>
      );
    }

    return <div></div>
  }
}
