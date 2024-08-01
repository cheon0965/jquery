import { Routes, Route, Link, NavLink, useParams, useRoutes } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

let contents = [
  { id: 1, title: 'HTML', description: 'HTML is..' },
  { id: 2, title: 'JS', description: 'JS is..' },
  { id: 3, title: 'React', description: 'React is..' },
];

function Topics() {
  const lis = contents.map((ele) => {
    return (
      <li key={ele.id}>
        <NavLink to={`/topics/${ele.id}`}>{ele.title}</NavLink>
      </li>
    );
  });
  return (
    <div>
      <h2>Topics</h2>
      <ul>{lis}</ul>
      <Routes>
        <Route path="/:topic_id" element={<Topic />}></Route>
      </Routes>
    </div>
  );
}

function Topic() {
  let { topic_id } = useParams();
  const content = contents.find((ele) => ele.id == topic_id);
  return (
    <>
      {topic_id} {content.description}
    </>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App() {
  let element = useRoutes([
    { path: '/', element: <Home /> },
    {
      path: '/Topics/*',
      element: <Topics />,
      children: [{ path: ':topic_id', element: <Topic /> }],
    },
    { path: '/Contact', element: <Contact /> },
    {
      path: '/*',
      element: () => {
        'Not Found';
      },
    },
  ]);

  return (
    <div className="App">
      <h1>Hello react router DOM</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/topics/">Topics</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      {element}
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Topics/*" element={<Topics />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/*" element={'Not Found'}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
