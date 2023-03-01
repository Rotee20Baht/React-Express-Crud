const db = require('../util/database');

module.exports = class Product{

    constructor(product_id, title, image_url, description, price){
        this.product_id = product_id;
        this.title = title;
        this.image_url = image_url;
        this.description = description;
        this.price = price;
    }

    static findAll(){
        return db.execute("select * from products");
    }

    save(){
        if(this.product_id){
            return db.execute(
                'update products set title=?, price=?, image_url=?, description=? where product_id = ?',
                [this.title, this.price, this.image_url, this.description, this.product_id]
            );
        }else{
            return db.execute(
                'insert into products (title, price, image_url, description) values(?,?,?,?)',
                [this.title, this.price, this.image_url, this.description]
            );
        }
    }

    static findById(product_id){
        return db.execute(
            'select * from products where product_id = ?',
            [product_id]
        );
    }

    static delById(product_id){
        return db.execute(
            'delete from products where product_id = ?',
            [product_id]
        );
    }

}