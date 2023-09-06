const http = require("http");

/*
//req는 요청, res는 응담
http.createServer((req, res) => {
    //헤더값을 추가로 보내는 코드
    //응답을 보낼때 헤더 값을 통해서 상태코드(숫자)를 보내서 어떤 타입인지도 보낸다.
    res.writeHead(200, { "Content-Type" : "text/html"});
    res.end("<p> Hello Wolrd!! </p>");
}).listen(3000, () => {
    console.log("3000번 포트 접속 완료");
});
*/

//api만들기
http
    .createServer((req, res) => {
        if(req.url === "/") {
            res.writeHead(200);
            res.end("main url");
            //url에 추가로 /upload를 넣을시 실행되는 코드
            //routing이라고도 표현됨
        } else if( req.url === "/upload") {
            res.writeHead(200);
            res.end("upload url")
        } else if( req.url === "/delete") {
            res.writeHead(200);
            res.end("delete url")
        } else {
            res.writeHead(484);
            res.end("Not Found!!!")
        }
    })
    .listen(3000, ()=> {
        console.log("3000번 포트 서버 접속 완료")
    })