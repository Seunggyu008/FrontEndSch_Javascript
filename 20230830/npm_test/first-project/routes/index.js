var express = require('express');
var router = express.Router();
const loginCheck = require("../module/loginCheck");
const upload = require("../module/imageUpload");

/*
//url 과 메소드로 라우터는 구분된다.
router.post('/main', (req, res) => {
  res.json({
    message: "main success",
  }); 
  const data = req.body.data;

  //문자열이 응답될수있을때 send
  res.send("문자열이 응답됩니다!")

  //json이 응답됩니다
  res.json({
    message: "json 응답"
  })

  //html코드를 응답된다
  //postman에선 html코드 자체가 보이지만 브라우저엔 렌더링 된 상태로 보인다.
  res.render("index");
});

/*
//GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

/*
let arr = [];

//GET method
router.get('/read', (req, res) => {
  res.status(200).json({
    message: "read success", 
  })
})

//POST method
router.post('/create', (req, res)=> {
  //이런식으로 data라는 키워드가 반복될경우 desctructuring 활용
  //const data = req.body.data
  const {data} = req.body;
  arr.push(data)
  res.status(200).json ({
    message: "create success",
    result: arr,
  });
})

//PUT method
//데이터를 업데이트 할려면 몇번째 데이터인지 알아야되는데,
//router에 parameter를 주어서 명시할수있다
//만약 2번쨰 데이터를 업데이트 하고싶을시, update/2 이런식으로 작성하면된다.
router.put("/update/:id", (req, res) => {
  const{ id } = req.params;
  const {data} = req.body;
  arr[id] = data;
  res.status(200).json ({
    message: "update success",
    result: arr,
  })
  console.log(id);
})

//DELETE method
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  arr.splice(id, 1);
  res.status(200).json({
    message: "delete success",
    result: arr
  })
})

router.post("/upload", upload.single("image"), (req, res)=> {
  const file = req.file;
  console.log(file);
  res.status(200).json({
    message: "upload success!!"
  })
})
*/

const postModel = require("../model/post");

router.post('/', async (req, res) => {
  const { title, content } = req.body;
  // class는 앞에 new를 붙혀서 만든다
  const post = new postModel({
    title: title,
    content: content,
  });

  try {
    //save()는 비동기로 움직이기에 아래 코드가 언제 끝날지 모른다
    //그렇기에 async, await과 try로 안전하게 실행할 수 있게 만든다
      const result = await post.save();
      res.status(200).json({
        message: "upload successful",
        data: result,
    });
  } catch(error) {
    res.status(500).json({
      message: error
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await postModel.find({})
    res.status(200).json({
      message: "read success",
      data: result,
    })
  } catch(error) {
    res.status(500).json({
      message: error,
    });
  }
});

router.get('/:id', async (req, res)=> {
  const {id} = req.params;
  try {
    const result = await postModel.findById(id);
    res.status(200).json({
      message: "detail success",
      data: result
    })
  } catch (error){
    res.status(500).json({
      message:error
    })
  }
})

router.put("/:id", async(req, res)=> {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const result = await postModel.findByIdAndUpdate(id, {
      title: title,
      content: content
    },
    {
      new: true
    });
    res.status(200).json({
      message: "update success",
      data:result
    })
  } catch (error) {
    res.status(500).json({
      message:error
    });
  }
});

router.delete("/:id,", async(req, res) => {
  const { id } = req.params;
  try {
    await postModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "delete success!!!",
    });
  } catch(error) {
    res.status(500).json({
      message: error
    })
  }
})


module.exports = router;
