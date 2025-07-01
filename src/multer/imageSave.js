const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Correct path: src/uploads (relative to current file in src/multer/)
const uploadDir = path.join(__dirname, "../uploads");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Create the folder if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
