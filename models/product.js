// fs.promises contains a subset of the interface for what's on fs, but with promise-based interfaces instead of plain
// callback-style interfaces.
// Keep in mind fs.promises is not a complete replacement for fs. It's an alternate (promise-based) interface for some
// (but not all) of the methods in the fs module.
const fs = require('fs').promises;
const path = require('path');
// Add this to my package.json file:
// "nodemonConfig": {
//       "ignore": ["*.json"]
//   }
// Nodemon would ignore any changes in json files and wouldn't restart the server.

const filePath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

const getProductsFromFile = async () => {
    try {
        const fileContent = await fs.readFile(filePath, 'utf8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.log('this gets executed')
        return [];
    }
};

// This declares an array products to store instances of the product objects.
// createProduct is a factory function that takes a title as an argument.
// Inside the function, it creates a product object with a title property.
// The save method is a part of the product object. When called, it pushes the current instance of the product (this)
// into the products array.

const createProduct = (title, imageUrl, description, price) => {
    return {
        title,
        imageUrl,
        description,
        price,
        id: Math.random().toString(),

        save: async function () {
            try {
                const products = await getProductsFromFile();
                products.push(this);
                await fs.writeFile(filePath, JSON.stringify(products));
                console.log('Product saved successfully');
            } catch (error) {
                console.error(error);
            }
        },
    };
};

// fetchAllProducts is a function that returns the products array. This allows you to retrieve all the products that have been saved.

const fetchAllProducts = async () => {
    return await getProductsFromFile();
};


// This exports the createProduct and fetchAllProducts functions as an object. It makes these functions accessible when
// you import this module into other files.
module.exports = { createProduct, fetchAllProducts };