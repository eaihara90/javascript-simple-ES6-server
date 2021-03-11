class ProductsController {
    constructor() { }

    getProducts(req, res, next) {
        res.status(200).json({ message: 'GET PRODUCTS PATH' });
    }
}

export const productsController = new ProductsController();
