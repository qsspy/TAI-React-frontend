import React from 'react';
import styles from './CategoryList.module.css';
import axios from 'axios';
import { env } from '../../environment';

const api = axios.create({
  baseURL: env.serverUrl
})

export default class CateroryList extends React.Component {

  state = {
    categories: []
  }

  componentDidMount() {
    api.get('/api/categories').then(res => {
      let newData = []
      newData.push({id:0, name:'Wszystkie', selected:true})
      res.data.forEach(category => {
        category.selected = false
        newData.push(category)
      });
      this.setState({categories: newData})
    })
  }

  onCategorySelect(event, id) {
    let tempCategories = [...this.state.categories]
    tempCategories.find(category=> category.selected==true).selected = false
    tempCategories.find(category=> category.id == id).selected = true
    this.setState({categories : tempCategories})
    this.props.onCategorySelect(id)
  }

  render() {

    if(this.state.categories.length != 0) {
      return (
        <ul className={"d-flex flex-wrap justify-content-center " + styles['category-list']}>
          {this.state.categories.map(category =>
             {
               if(category.selected) {
                return <li className={"flex-fill text-center p-3 " + styles.selected} key={category.id} 
                onClick={(e)=>this.onCategorySelect(e, category.id)}>{category.name}</li>
               } else {
                return <li className="flex-fill text-center p-3 " key={category.id} 
                onClick={(e)=>this.onCategorySelect(e, category.id)}>{category.name}</li>
               }
             }
          )}     
        </ul>
      );
    } 
      return <div></div>
  }
}
