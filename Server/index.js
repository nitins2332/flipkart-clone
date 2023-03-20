import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import DefaultData from "./default.js";
import router from "./routes/route.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

const PORT = 8000;
Connection();

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

DefaultData();
