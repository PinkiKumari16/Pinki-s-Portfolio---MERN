const multer = require("multer");
const fs = require("fs");
const path = require("path");

const uploadDir = path.join(__dirname, "../frontend/public");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const newName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, newName + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

module.exports = { upload };
