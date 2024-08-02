// express
const express = require('express');
const app = express();
const port = 80;

// 쿠키
var cookieParser = require('cookie-parser');
// morgan 로그 추가
const morgan = require('morgan');
// cors
const cors = require('cors');
app.use(express.static('public'));
//multer 파일 업로드
const multer = require('multer');
const upload = multer({ dest: 'C:/temp/' });

// session
const session = require('express-session');
const fileStore = require('session-file-store')(session);

// 라우터 선언
const board = require('./routers/board');

//쿠키
app.use(cookieParser());

//session cookie
app.use(
  session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      //secure: true,
      maxAge: 3600000,
    },
    store: new fileStore(),
  })
);

// cors 허용
app.use(cors());

// morgan 로그
app.use(morgan(':date[clf] :method :remote-addr'));

app.get('/', (req, res) => {
  res.send('hello world!');
});

// post방식 body parse
app.use(express.urlencoded({ extended: false }));
// json
app.use(express.json());

// 라우팅 : 클라이언트 요청에 응답하는 방법을 결정
app.use('/board', board);

app.listen(port, () => {
  console.log(`server runing http://localhost:${port}`);
});
