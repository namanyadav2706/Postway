import multer from "multer";

const configStorage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'public/images');
    },
    filename:(req,file,cb) => {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name);
    }
})

const uploadFile = multer({storage:configStorage})
export default uploadFile;

