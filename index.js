const express = require("express");
const cors = require("cors")
const bodyParser = require ("body-parser")

const adminRouter = require('./db/routes/admin')
const adminblog = require('./db/routes/blog')

const app = express();
const PORT = process.env.PORT || 3003;

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => res.send("Halo sequelize Migration"));

app.use("/admin", adminRouter);
app.use("/blog", adminblog)

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
