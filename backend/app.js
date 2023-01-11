require("dotenv").config();

const port = process.env.PORT || 3000;
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({origin: "*"}));
app.use(express.json());

require("./db");

const notesRouter = require("./routes/notes");
app.use("/notes", notesRouter);

app.listen(port, () => console.log("Connected on port " + port));