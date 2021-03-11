import express from 'express';
import cors from 'cors';
import { routes } from './routes';

class Server {
    
    constructor(app) {
        this.app = app;
    }

    startServer() {
        this.app.use(cors());
        this.app.use(routes);
        this.app.listen(5000, () => console.log('[SERVER] . . . . Running on port 5000'));
    }
}

export const server = new Server(express());
