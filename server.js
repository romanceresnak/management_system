const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//import routes
const project = require("./routes/api/Project");
const room = require("./routes/api/Room");
const user = require("./routes/api/User");

const app = express();

const db = require("./config/keys").mongoURI;

//database connect
mongoose
  .connect(db)
  .then(() => console.log("Connected to mongo db"))
  .catch(err => console.log(`Nastala chyba ${err}`));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello"));

//routes
app.use("/api/project", project);
app.use("/api/room", room);
app.use("/api/user", user);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
