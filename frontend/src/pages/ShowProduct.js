import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ShowProduct extends React.Component {
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
            <section>
                <div class="breadcrumb-section breadcrumb-bg">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2 text-center">
                                <div class="breadcrumb-text">
                                    <p>Fresh and Organic</p>
                                    <h1>Product Management</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container py-5">
                    <div class="row">
                        <div class="col-12">
                            <Link to="/create-products" className="btn btn-warning mb-2">Create</Link>
                            <table class="table table-bordered text-center table-striped">
                                <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.data.map(item => (
                                    <tr>
                                        <th scope="row" style={{ fontFamily: 'Kanit' }}>{item.title}</th>
                                        <td><img src={item.image_url} width="128px" height="128px"/></td>
                                        <td>{item.price} ฿</td>
                                        <td>
                                            <Link to={"/products/"+item.product_id} type="button" class="btn btn-primary"><i class="far fa-eye"></i></Link>
                                            <Link to={"/update-products/"+item.product_id} type="button" class="btn btn-success mx-2"><i class="fas fa-edit"></i></Link>
                                            <button type="button" class="btn btn-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.handleDelete(item.product_id) } }><i class="far fa-trash-alt"></i></button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ShowProduct;