const multer = require('multer');
//upload를 통해 업로드된 파일은 암호화된 파일이 아니라 
//알아볼수있는 파일명으로 바꿔야한다
//그리고 어디로 저장될지 명시하기 위한 코드
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
})
const upload = multer({ storage: storage });

module.exports = upload;