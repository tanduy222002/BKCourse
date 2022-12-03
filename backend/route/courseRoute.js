const express = require("express");
const router = express.Router();

const {getCourseByName} =require('../api/courseController')

router.route("/").get(getCourseByName)



module.exports= router;
