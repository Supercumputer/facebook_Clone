const express = require("express");
const router = require("./routes/index");
const bodyParser = require("body-parser");
const connectDb = require("./ConnectDb/ConnectDb");
const cookieParser = require("cookie-parser");
const app = express();
const port = 4000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT,PATCH, DELETE, OPTIONS, "
  );
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());

router(app);

connectDb();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
