const API = require("./client/utils/API");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;
const mongoose = require("mongoose");

const routeWrite = require("./routes/write");
const routeRead = require("./routes/read");
const routeRegister = require("./routes/register");

const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build/"));
}

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/writersblocks", { useNewUrlParser: true });

app.use('/write', routeWrite);
app.use('/read', routeRead);
app.use('/register', routeRegister);

// Send every other request to the React app
// Define any API routes before this runs
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
