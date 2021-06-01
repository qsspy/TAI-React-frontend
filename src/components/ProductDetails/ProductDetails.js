import React from 'react';
import styles from './ProductDetails.module.css';
import axios from 'axios';
import { env } from '../../environment';
import QuantityPicker from '../QuantityPicker/QuantityPicker';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import ProductDetailsDescription from '../ProductDetailsDescription/ProductDetailsDescription'

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

    api.get(`/api/products/${this.state.productId}`).then(res => {
      this.setState({ product: res.data })
    })
  }

  render() {
    if (this.state.product) {

      const product = this.state.product

      const isDiscount = product.discountPercent != null && product.discountPercent != 0
      const discount = product.discountPercent

      return (
        <div>
          <div className="d-flex flex-column flex-lg-row">
            <div className={"mb-2 " + styles.img__container}>
              {isDiscount ? <div className={styles.discount}>-{discount * 100}%</div> : null}
              <img src={'data:image/png;base64,' + product.image} className={styles.product__image}></img>
            </div>
            <div className="d-flex flex-column justify-content-center flex-fill ml-lg-4">
              <h2>{product.name}</h2>
              <div className="d-flex">
                {isDiscount ? <h3 style={{ color: 'grey', textDecoration: 'line-through' }} className="mr-2"
                >{parseFloat(product.price + product.price * product.discountPercent).toFixed(2)}zł</h3> : null}
                <h3>{parseFloat(product.price).toFixed(2)}zł</h3>
              </div>
              <p className="font-weight-bold">Krótki opis :</p>
              <p>{product.shortDescription}</p>
              <div className="d-flex justify-content-between mr-5">
                <QuantityPicker min={0} max={4} />
                <Button variant="secondary">
                  <FontAwesomeIcon icon={faShoppingBasket} className="mr-2" />
                  Do Koszyka
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-4">
          <ProductDetailsDescription description={product.longDescription}/>
          </div>
        </div>
      );
    }

    return <div></div>
  }
}
