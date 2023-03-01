import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProductDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          product_id: props.match.params.product_id,
          title: '',
          image_url: '',
          description: '',
          price: 0,
          redirect: null
        }
      }
  
      componentDidMount(){
        axios.get('http://localhost:8083/admin/edit-products/'+this.state.product_id).then(res => {
          let data = res.data.data[0];
          console.log(data);
          this.setState({
            title: data.title,
            image_url: data.image_url,
            description: data.description,
            price: data.price
          });
        }).catch(error => {
          console.log(error);
        });
      }

    render(){
        return(
            <section>
                <div class="breadcrumb-section breadcrumb-bg-2">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2 text-center">
                                <div class="breadcrumb-text">
                                    <p>Fresh and Organic</p>
                                    <h1 style={{ fontFamily: 'Kanit' }}>{this.state.title}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="single-product mt-150 mb-150">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="single-product-img">
                                    <img src={this.state.image_url} alt=""/>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <div class="single-product-content">
                                    <h3 style={{ fontFamily: 'Kanit' }}>{this.state.title}</h3>
                                    <p class="single-product-pricing"><span style={{ fontFamily: 'Kanit' }}>ต่อชิ้น</span> {this.state.price} ฿</p>
                                    <p style={{ fontFamily: 'Kanit' }}>{this.state.description}</p>
                                    <div class="single-product-form">
                                        <form action="index.html">
                                            <input type="number" placeholder="0"/>
                                        </form>
                                        <Link to={'/products'} style={{textDecoration: 'none'}} class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</Link>
                                    </div>
                                    <h4>Share:</h4>
                                    <ul class="product-share">
                                        <li><a href=""><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href=""><i class="fab fa-twitter"></i></a></li>
                                        <li><a href=""><i class="fab fa-google-plus-g"></i></a></li>
                                        <li><a href=""><i class="fab fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ProductDetail;