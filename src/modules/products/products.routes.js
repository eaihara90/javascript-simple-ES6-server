import { Router } from 'express';
import { productsController } from './products.controller';

export const productsRoutes = Router();

productsRoutes.get('', productsController.getProducts);
