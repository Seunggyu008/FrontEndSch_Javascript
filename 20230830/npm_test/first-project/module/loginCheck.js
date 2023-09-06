//middleware
const loginCheck = (req, res, next) => {
    const userLogin = false;
    if(userLogin) {
        next();
    } else {
        res.status(400).json({
        message: "login fail"
        })
    }
}

//req가 들어왔을때, loginCheck가 먼저 실행되고 그 후 다음 로직이 실행된다
//만약 성공했다면 
/* router.get('/', loginCheck, (req, res) => {
    res.status(200).json ({
        message: "login success",
    })
}) */


//외부 파일에서도 사용가는하게 export 해준다
module.exports = loginCheck;