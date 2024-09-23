require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const Products = require('./models/Products');

const app = express();
const PORT = process.env.PORT || 5000;

console.log('Adidas Server is starting');
connectDB();

app.use(express.json());

app.get('/api/products', async (req, res) => {
    const products = await Products.find().catch(error => {
        return res.status(500).json({ message: 'Error fetching products', error });
    });

    res.json(products);
});

app.get('*', (req, res) => {
    res.status(404).send('<p>Error 404</p><p>The requested URL was not found</p>');
});


app.listen(PORT, () => {
    console.log(`Adidas Server is running on port ${PORT}`);
});
