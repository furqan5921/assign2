const { Router } = require("express");
const { textGenerator, getChat } = require("../controller/responseCtrl");

const app = Router()
app.get("/",getChat)
app.post("/", textGenerator);


module.exports = app