// import logo from './logo.svg';
// import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import React from 'react';
import Footer from './components/Footer';
import Products from './pages/Products';
import CreateProducts from './pages/CreateProducts';
import UpdateProducts from './pages/UpdateProducts';
import Header from './components/Header';
import FeatureList from "./components/FeatureList";
import CartBanner from "./components/CartBanner";
import ProductSection from "./components/ProductSection";
import BreadCrumb from "./components/BreadCrumb";
import ProductDetail from "./pages/ProductDetail";
import ShowProduct from "./pages/ShowProduct";

class App extends React.Component {

  render(){
    return(
        <Router>
            <Header />
            <Switch>
                <Route path="/update-products/:product_id" component={UpdateProducts} />
                <Route path="/show-products">
                    <ShowProduct />
                </Route>
                <Route path="/create-products">
                    <CreateProducts />
                </Route>
                <Route Route path="/products/:product_id" component={ProductDetail} />
                <Route path="/products">
                    <BreadCrumb />
                    <Products />
                </Route>
                <Route path="/">
                    <Home />
                    <FeatureList />
                    <ProductSection />
                    <CartBanner />
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
  }

}

export default App;
