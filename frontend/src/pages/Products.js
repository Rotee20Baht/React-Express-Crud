import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Products extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(){
    this.getData()
    }

    getData = () => {
        axios.get("http://localhost:8083/admin/products").then((res) => {
            this.setState({data: res.data.data});
        }).catch((error) => {
            console.log(error);
        });
    }

    handleDelete = (product_id) => {
        console.log(product_id);
        axios.get('http://localhost:8083/admin/delete-products?product_id='+product_id).then(res => {
          console.log(res.data);
          if(res.data.result){
            this.getData();
          }
        }).catch(error => {
          console.log(error);
        });
    }

    render(){
        return(
            <div class="product-section mt-150 mb-150">
                <div class="container">

                    <div class="row">
                        <div class="col-md-12">
                            <div class="product-filters">
                                <ul>
                                    <li class="active" data-filter="*">All</li>
                                    <li data-filter=".strawberry">Dessert</li>
                                    <li data-filter=".berry">Food</li>
                                    <li data-filter=".lemon">Souvenir</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="row product-lists">
                        {this.state.data.map(item => (
                        <div class="col-lg-4 col-md-6 text-center strawberry">
                            <div class="single-product-item">
                                <div class="product-image">
                                    <Link to={"/products/"+item.product_id}><img src={item.image_url} alt="" /></Link>
                                </div>
                                <h3 className='text-capitalize' style={{ fontFamily: 'Kanit' }}>{item.title}</h3>
                                <p class="product-price" style={{ fontFamily: 'Kanit' }}><span>ต่อชิ้น</span> {item.price} ฿</p>
                                <Link to={"/products/"+item.product_id} class="cart-btn" style={{textDecoration: 'none'}} ><i class="fas fa-shopping-cart"></i> Detail</Link>
                            </div>
                        </div>
                        ))}
                    </div>

                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="pagination-wrap">
                                <ul>
                                    <li><Link to={'/'}>Prev</Link></li>
                                    <li><Link className='active' to={'/'}>1</Link></li>
                                    <li><Link to={'/'}>2</Link></li>
                                    <li><Link to={'/'}>3</Link></li>
                                    <li><Link to={'/'}>Next</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Products;