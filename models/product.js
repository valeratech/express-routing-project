// Products array
const products = [];

// Product factory function
const createProduct = (title) => {
    const product = {
        title,

        save() {
            products.push(this);
        }
    };
    console.log(products)

    return product;
};

// Fetch all products function
const fetchAllProducts = () => {
    return products;
};

module.exports = { createProduct, fetchAllProducts };