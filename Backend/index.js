const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { authenticator } = require("./middlewares/authenticator");
const { roleValidator } = require("./middlewares/roleValidator");
const { userLogger } = require("./middlewares/userLogger");
const { userValidator } = require("./middlewares/uservalidator");
const { userRouter } = require("./routes/user.routes");

require("dotenv").config();
const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(userValidator);
app.use(authenticator);
app.use(userLogger);
app.use("/user", roleValidator);

app.use("/user", userRouter);

app.listen(port, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (error) {
    console.log(error);
  }

  console.log("Server is started on port number", port);
});
