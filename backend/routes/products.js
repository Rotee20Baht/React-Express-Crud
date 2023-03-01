const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');

// path
// แสดงสินค้าทั้งหมด
router.get('/products', productController.getAllProducts);

// เพิ่มสินค้า
router.post('/add-products', productController.addProduct);

// แสดงสินค้าจากไอดี
router.get('/edit-products/:product_id', productController.getEditProduct);

// แก้ไขสินค้า
router.post('/edit-products', productController.editProduct);

// ลบสินค้า
router.get('/delete-products', productController.deleteProduct)

module.exports = router;