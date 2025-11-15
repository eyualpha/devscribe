const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");
const connectDB = require("./configs/mongodb");
const PORT = require("./configs/env").PORT;

const userRouter = require("./routes/user.route");
const postRouter = require("./routes/post.route");
const authRouter = require("./routes/auth.route");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/auth", authRouter);

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

app.get("/", (req, res) => {
  res.send("DEVSCRIBE");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
