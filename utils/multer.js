const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public/upload/projects');
  },

  filename: function(req, file, cb) {

    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb)=>{
    if(file.fieldname == "files") return cb(null, false)
    cb(null, true);
  }
});

module.exports = upload;