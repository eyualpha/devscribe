const express = require("express");
const connectDB = require("./configs/mongodb");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");

const userRouter = require("./routes/user.route");
const postRouter = require("./routes/post.route");
const authRouter = require("./routes/auth.route");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("DEVSCRIBE");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
