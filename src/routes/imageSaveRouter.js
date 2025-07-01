const express = require("express");
const { saveIMage, getUnitById } = require("../controller/imageSaveController");
const upload = require("../multer/imageSave");
const saveIMagerouter = express.Router();

saveIMagerouter.post("/save-image/:unit_id", upload.single("file"), saveIMage);
module.exports = saveIMagerouter;
