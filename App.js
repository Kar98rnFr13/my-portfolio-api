const express = require("express");
const app = express();
const routes = require("./routes/router");
const admmin = require("./routes/admin");
const mailer = require("./routes/mailer");
const connectDb = require("./db/connect");
require("dotenv").config();

// extra security packages

const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

app.set("trust proxy", 1); // if your app is behind a reverse proxy e.g heroku
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);

app.use(express.json());

// deployment
app.use(helmet());
app.use(cors());
app.use(xss());

// routes
app.use("/api/great/myportfolio", routes);
app.use("/api/admin", admmin);
app.use("/api/sendmail", mailer);
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    // connect db
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
