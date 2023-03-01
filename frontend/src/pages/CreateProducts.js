import axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router';

class CreateProducts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        title: '',
        image_url: '',
        description: '',
        price: 0,
        redirect: null
        }
    }

    handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
        [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8083/admin/add-products', this.state).then(res => {
        console.log(res.data);
        if(res.data.result){
            this.setState({redirect: '/products'});
        }
        }).catch(error => {
        console.log(error);
        });
    }

    render(){
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return(
            <section>
                <div class="breadcrumb-section breadcrumb-bg">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2 text-center">
                                <div class="breadcrumb-text">
                                    <p>Fresh and Organic</p>
                                    <h1>Add Product</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <form onSubmit={this.handleSubmit} style={{ fontFamily: 'Kanit' }}>
                                <div class="form-group">
                                    <label>ชื่อสินค้า</label>
                                    <input type="text" name="title" class="form-control" placeholder="ชื่อสินค้า" onChange={this.handleChange} />
                                </div>
                                <div class="form-group">
                                    <label>รายละเอียด</label>
                                    <textarea type="text" rows="5" name="description" class="form-control" placeholder="รายละเอียด" onChange={this.handleChange} />
                                </div>
                                <div class="form-group">
                                    <label>ที่อยู่รูปภาพ</label>
                                    <input type="text" name="image_url" class="form-control" placeholder="ที่อยู่รูปภาพ" onChange={this.handleChange} />
                                </div>
                                <div class="form-group">
                                    <label>ราคา</label>
                                    <input type="text" name="price" class="form-control" placeholder="ราคา" onChange={this.handleChange} />
                                </div>
                                <button type="submit" class="btn btn-primary">บันทึก</button>
                            </form>
                        <br />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default CreateProducts;