import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "images");
    },
    filename:(req, file, callback) => {
        callback(null,"image" + Date.now() + path.extname(file.originalname));
    },
}); 

const fileFilter = (req, file, callback) => {
    const allowedFileTypes = /jpeg|jpg|png/;
    const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedFileTypes.test(file.mimetype);
    
    if (extname && mimetype) {
      callback(null, true);
    } else {
      callback(new Error('Only images are allowed (jpeg, jpg, png)'));
    }
  };

  const uploadImage= multer({ storage: storage});
  export default uploadImage;