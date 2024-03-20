import express from 'express';
import homeController from '../Controllers/homeController';

const router = express.Router();

const initWebRoutes = (app) => {
    router.get("/home", homeController.handleHelloworld);
    return app.use("/", router);
}

export default initWebRoutes;
