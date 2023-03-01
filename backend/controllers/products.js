const Product = require('../models/products');

exports.getAllProducts = (req, res, next) => {
    Product.findAll().then(products => {
        res.status(200).json({
            "message": "success",
            "data": products[0]
        });
    }).catch(error => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.addProduct = (req, res, next) => {
    const title = req.body.title;
    const image_url = req.body.image_url;
    const description = req.body.description;
    const price = req.body.price;
    
    const product = new Product(null, title, image_url, description, price);
    product.save().then(() => {
        res.status(200).json({
            "message": "success",
            "result": true
        });
    }).catch((error) => {
        res.status(200).json({
            "message": error,
            "result": false
        });
    });
}

exports.getEditProduct = (req, res, next) => {
    const product_id = req.params.product_id;
    Product.findById(product_id).then((products) => {
        res.status(200).json({
            "message": "success",
            "data": products[0]
        });
    }).catch((error) => {
        res.status(500).json({
            "message": error
        });
    });
}

exports.editProduct = (req, res, next) => {
    const product_id = req.body.product_id;
    const title = req.body.title;
    const image_url = req.body.image_url;
    const description = req.body.description;
    const price = req.body.price;
    
    const product = new Product(product_id, title, image_url, description, price);
    product.save().then(() => {
        res.status(200).json({
            "message": "success",
            "result": true
        });
    }).catch((error) => {
        res.status(200).json({
            "message": error,
            "result": false
        });
    });
}

exports.deleteProduct = (req, res, next) => {
    const product_id = req.query.product_id;
    Product.delById(product_id).then(() => {
        res.status(200).json({
            "message": "success",
            "result": true
        });
    }).catch((error) => {
        res.status(500).json({
            "message": error,
            "result": false
        });
    });
}
