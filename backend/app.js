require("dotenv").config();

const port = process.env.PORT || 3000;
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const notesRouter = require("./routes/notes");

app.use(cors({origin: "*"}));
app.use(express.json());
app.use("/notes", notesRouter);

app.use(express.static(__dirname + '/../frontend/build'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

mongoose.connect(process.env.DATABASE_URL)
.then(
  () => {
    console.log("Connected to Database");
    app.listen(port, () => console.log('Server ready on port ' + port));
  },
  err => console.error(err)
);