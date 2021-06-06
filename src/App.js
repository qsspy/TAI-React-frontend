import "bootstrap/dist/css/bootstrap.min.css";
import './global-styles/topography.css'
import './global-styles/App.css';
import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import ProductDetails from './components/ProductDetails/ProductDetails';


export default class App extends React.Component {

  render() {
    return (

      <div className="body">
        <div className="header container d-flex justify-content-center border bg-white">
          <Header />
        </div>
        <div className="sub-body container bg-void py-3">
          <Router>
            <Switch>
              <Route path="/shop" exact component={Shop}></Route>
              <Route path="/product/:id" component={ProductDetails}></Route>
              <Redirect to="/shop"></Redirect>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}
