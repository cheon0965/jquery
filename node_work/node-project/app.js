const express = require('express');
const userRouter = require('./routers/user.js');
const productRouter = require('./routers/product.js');
// morgan 로그 추가
const morgan = require('morgan');

const cors = require('cors');

// session
const session = require('express-session');
const fileStore = require('session-file-store')(session);

const app = express();
const port = 3000;

//session cookie
app.use(
  session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      //secure: true,
      maxAge: 60000,
    },
    store: new fileStore(),
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

// post방식 body parse
app.use(express.urlencoded({ extended: false }));
// json
app.use(express.json());
// 라우팅 : 클라이언트 요청에 응답하는 방법을 결정

app.use('/member', userRouter);
app.use('/product', productRouter);

app.listen(port, () => {
  console.log(`server runing http://localhost:${port}`);
});
