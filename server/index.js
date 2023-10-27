require("dotenv").config()
const express = require('express');
const cors = require('cors');
const { textGenerator, sentimentGenerator } = require("./controller/responseCtrl");
const textRouter = require("./routes/textRoute")
const sentimentRouter = require("./routes/sentimentRoute")
const port = process.env.PORT || 8081
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use("/textGenerator", textRouter)
app.use("/sentiment", sentimentRouter)



app.listen(port, () => console.log("server listening on port " + port))