import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import DefaultData from "./default.js";
import router from "./routes/route.js";

import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

const app = express();
app.use(
  cors({
    methods: ["POST", "GET", "DELETE", "UPDATE"],
    credentials: true,
  })
);

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

Connection();

app.listen(port, () => console.log(`Listening on ${port}`));

// module.exports = app;

// DefaultData();
