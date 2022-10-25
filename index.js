const cors = require("cors");

const express = require("express");

const bodyParser = require("body-parser");

const passport = require("passport");

const app = express();

// const { PORT } = require("./src/config/index");

const port = process.env.PORT ||3000;

const connectDB = require("./src/config/db");

app.use(cors());

app.use(bodyParser.json());

app.use(passport.initialize());

require("./src/middlewares/passport")(passport);

app.use("/user", require("./src/controllers/user_controller"));

app.use("/videos",require("./src/controllers/video_controller"));

app.listen(port,async () => {
  console.log(`listening on port ${port}`);
  connectDB();
});