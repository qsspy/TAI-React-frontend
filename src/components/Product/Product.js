import React from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {

  const product = props.product

  return (
    <div className={"bg-white d-flex flex-column align-items-center m-3 p-3 " + styles.main__container}>
      <div className={"mb-2 " + styles.img__container}>
        <img src={'data:image/png;base64,' + product.image} className={styles.product__image}></img>
      </div>
      <h3>{product.name}</h3>
      <h4>{parseFloat(product.price).toFixed(2)}zł</h4>
      <p>{product.shortDescription}</p>
      <Link to={`/product/${product.id}`}>
        <Button variant="secondary">
          <FontAwesomeIcon icon={faShoppingBasket} className="mr-2" />
          Kup Teraz
        </Button>
      </Link>
    </div>
  )
};

export default Product
