import { useRoutes, Link } from 'react-router-dom';
import route from './route/index';

function Hedder() {
  return (
    <hedder>
      <div>
        <Link to="/">Home</Link>
        <Link to="/board">전체조회</Link>
        <Link to="/board/insert">글 등록</Link>
      </div>
    </hedder>
  );
}

function Footer() {
  return (
    <footer>
      <div>
        <p>2023 Company, inc</p>
      </div>
    </footer>
  );
}

export default function App() {
  const routers = useRoutes(route);
  return (
    <div>
      <Hedder />
      <body>{routers}</body>
      <Footer />
    </div>
  );
}
