const express = require('express');

const userRouter = require('./routers/user.js');
const productRouter = require('./routers/product.js');
const product = require('./routers/product2.js');
const loginRouter = require('./routers/login.js');
const customer = require('./routers/customer.js');
const customer2 = require('./routers/customer2.js');
const customer3 = require('./routers/customer3.js');

// 쿠키
var cookieParser = require('cookie-parser');

// morgan 로그 추가
const morgan = require('morgan');

const cors = require('cors');

//multer 파일 업로드
const multer = require('multer');
const upload = multer({ dest: 'C:/temp/' });

// session
const session = require('express-session');
const fileStore = require('session-file-store')(session);

const app = express();
const port = 3000;

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
    // store: new fileStore(),
  })
);

// cors 허용
app.use(cors());

// morgan 로그
app.use(morgan(':date[clf] :method :remote-addr'));

// 정적 디렉토리로 만들어줌(해당 경로 하위로 이동가능)
app.use(express.static('C:/Users/admin/Desktop/jquery/node_work/node-project/public'));

app.get('/', (req, res) => {
  res.send('hello world!');
});

// 첨부파일받기
app.post('/upload', upload.single('profile'), function (req, res) {
  console.log(req.file);
  const oName = req.file.originalname;
  const filename = req.file.filename;

  res.send(`업로드 성공 ${oName}, ${filename}`);
});

// post방식 body parse
app.use(express.urlencoded({ extended: false }));
// json
app.use(express.json());

// 라우팅 : 클라이언트 요청에 응답하는 방법을 결정
app.use('/member', userRouter);
app.use('/product', productRouter);
app.use('/product2', product);
app.use('/customer', customer);
app.use('/customers', customer2);
app.use('/customer3', customer3);

// 로그인
app.use('/', loginRouter);

app.listen(port, () => {
  console.log(`server runing http://localhost:${port}`);
});
