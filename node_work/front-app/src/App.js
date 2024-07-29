import './App.css';
import Toolbar from './Event';

// 컴포넌트
function Header({ color = 'yellow', title, onChangMod }) {
  const chickHandler = (event) => {
    event.preventDefault();
    alert('해더클릭');
    onChangMod();
  };
  return (
    <header>
      <h2 style={{ color: color }}>
        <a href="/" onClick={chickHandler}>
          {title}
        </a>
      </h2>
    </header>
  );
}

function Nav({ topics }) {
  // const lis = [];
  // for (let i = 0; i < topics.length; i++) {
  //   lis.push(<li>{topics[i].title}</li>);
  // }

  const lis = topics.map((ele) => {
    return <li key={ele.id}>{ele.title}</li>;
  });

  return (
    <nav>
      <ul>{lis}</ul>
    </nav>
  );
}

function Article({ content, fruits }) {
  const fruitLsit = fruits.map((ele) => {
    return <li key={ele}>{ele}</li>;
  });

  return (
    <article>
      <h2>{content.title}</h2>
      {content.body} {content.name}
      <ul>{fruitLsit}</ul>
    </article>
  );
}

function Profile(props) {
  return <Avatar {...props} />;
}
function Avatar({ person, width, height }) {
  return <img className="avatar" src={person.imageId} alt={person.name} width={width} height={height} />;
}

const topic = [
  { id: 1, title: 'html', body: 'html is ...' },
  { id: 2, title: 'css', body: 'css is ...' },
  { id: 3, title: 'javascripy', body: 'javascripy is ...' },
];

function App() {
  return (
    <div className="App">
      <Header
        title="web"
        onChangMod={() => {
          alert('핸들러 전달');
        }}
      />
      <Nav topics={topic} />
      <Toolbar />
      <Article content={{ title: 'welcome', body: 'hello web', name: 'Tom' }} fruits={['바나나', '사과', '포도']} />
      <Profile width="100" height="100" person={{ name: 'Katsuko Saruhashi', imageId: 'logo192.png' }} />
    </div>
  );
}

export default App;
