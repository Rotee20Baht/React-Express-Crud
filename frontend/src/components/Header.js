import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    render(){
        return(
            <div class="top-header-area" id="sticker">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-sm-12 text-center">
                            <div class="main-menu-wrap">
                                <div class="site-logo">
                                    <a href="index.html">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/logo.png'} alt="" />
                                    </a>
                                </div>

                                <nav class="main-menu">
                                    <ul>
                                        <li><Link to="/" style={{textDecoration: 'none'}} >Home</Link></li>
                                        <li><Link to="/products" style={{textDecoration: 'none'}} >Shop</Link></li>
                                        <li><Link href="#" style={{textDecoration: 'none'}}>Admin</Link>
                                            <ul class="sub-menu">
                                                <li><Link to={'/show-products'} style={{textDecoration: 'none'}}>Show Product</Link></li>
                                                <li><Link to={'/create-products'} style={{textDecoration: 'none'}}>Add Product</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div class="header-icons">
                                                <a class="shopping-cart" href="cart.html"><i class="fas fa-shopping-cart"></i></a>
                                                <a class="mobile-hide search-bar-icon" href="#"><i class="fas fa-search"></i></a>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                                <a class="mobile-show search-bar-icon" href="#"><i class="fas fa-search"></i></a>
                                <div class="mobile-menu"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;