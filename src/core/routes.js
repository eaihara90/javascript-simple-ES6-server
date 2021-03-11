import express from 'express';
import { productsRoutes } from '../modules/products/products.routes';

export const routes = express.Router();

routes.use('/api/products', productsRoutes);