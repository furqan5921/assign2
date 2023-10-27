const {Router} =require("express");
const { sentimentGenerator } = require("../controller/responseCtrl");

const app = Router()

app.post("/",sentimentGenerator)


module.exports = app