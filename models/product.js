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
        return [];
    }
};

const createProduct = (title) => {
    return {
        title,

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

const fetchAllProducts = async () => {
    return await getProductsFromFile();
};

module.exports = { createProduct, fetchAllProducts };