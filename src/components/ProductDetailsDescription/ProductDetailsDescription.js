import React from 'react';
import styles from './ProductDetailsDescription.module.css';

export default class ProductDetailsDescription extends React.Component {

  reviewsString = 'This section will contain user reviews in the future'
  shippingString = 'This section will contain shipping info in the future'
  descriptionString = this.props.description

  state = {
    texts: [
      {type: 'Description', text: this.props.description, selected: true},
      {type: 'Reviews', text: 'This section will contain user reviews in the future', selected: false},
      {type: 'Shipping', text: 'This section will contain shipping info in the future', selected: false}
    ]
  }

  render() {
    return (
      <div>
        <ul className={"d-flex " + styles['list']}>
          {this.state.texts.map(text => {
            if(text.selected) {
              return <li key={text.type} className={styles['selected']}>{text.type}</li>
            }
            return <li key={text.type} onClick={() => this.changeText(text.type)}>{text.type}</li>
          })}
        </ul>
        <hr/>
        <div className={styles['text-area']}>
          {this.state.texts.find(text=> text.selected == true).text}
        </div>
        <hr/>
      </div>
    );
  }

  changeText(type) {
    const tempTexts = this.state.texts
    tempTexts.find(text => text.selected == true).selected = false
    tempTexts.find(text => text.type == type).selected = true
    this.setState({texts: tempTexts})
  }
}
