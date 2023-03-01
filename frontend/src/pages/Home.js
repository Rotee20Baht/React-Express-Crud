import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render(){
        return(
            <div class="hero-area hero-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-9 offset-lg-2 text-center">
                            <div class="hero-text">
                                <div class="hero-text-tablecell">
                                    <p class="subtitle">Fresh & Organic</p>
                                    <h1>Delicious Traditional Trang Food </h1>
                                    <div class="hero-btns">
                                        <Link to={'/products'} style={{textDecoration: 'none'}} class="boxed-btn">Food Collection</Link>
                                        <a href="https://www.facebook.com/dodo.tripob/" style={{textDecoration: 'none'}} target="_blank" class="bordered-btn">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
}

export default Home;