import express from "express";
import initWebRoutes from "./routers/web";
import configViewEngine from "./configs/viewEngine";
import bodyParser from "body-parser"; // don't forget to import bodyParser
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 8080;

configViewEngine(app);
initWebRoutes(app);

app.listen(PORT, () => {
    console.log("Chạy ngon ơ luôn nè mấy ní trên cái port " + PORT);
});
