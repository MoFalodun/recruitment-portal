const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const session = require("express-session");
const pgSession = require("express-pg-session")(session);
const { userRouter, adminRouter } = require("./routes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(logger("dev"));
let columnNames = {
  session_id: "sid",
  session_data: "sess",
  expire: "expires_at",
};
app.use(
  session({
    store: new pgSession({
      conString: process.env.DATABASE_URL,
      tableName: "user_sessions",
      columns: columnNames,
      isAuth: "false",
    }),
    secret: "key to sign in",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000, secure: true },
  })
);
app.use(userRouter);
app.use(adminRouter);

app.get("/", (req, res) => {
  res.json({ welcome: "hello" });
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
