const express  = require('express');
const db = require("./util/database");
const app = express();

const adminProductRoutes = require('./routes/products');

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use("/admin",adminProductRoutes);

app.listen(8083);