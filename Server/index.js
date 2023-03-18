import express from "express";

import Connection from "./database/db.js";
import DefaultData from "./default.js";

const app = express();

Connection();

const PORT = 8000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

DefaultData();
