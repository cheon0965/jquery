import { useState } from 'react';

function Header({ title, onChangMod }) {
  return (
    <header>
      <h1>
        <a href="/" onClick={onChangMod}>
          {title}
        </a>
      </h1>
    </header>
  );
}
function Create({ onCreate }) {
  return (
    <article
      onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        onCreate(title, body);
      }}
    >
      <h2>Create</h2>
      <form>
        <p>
          <input name="title" placeholder="title"></input>
        </p>
        <p>
          <input name="body" placeholder="body"></input>
        </p>
        <p>
          <input type="submit" value="create"></input>
        </p>
      </form>
    </article>
  );
}

function Update(props) {
  return (
    <article>
      <h2>Update</h2>
      <form>
        <p>
          <input name="title" placeholder="title" value={props.title}></input>
        </p>
        <p>
          <input name="body" placeholder="body" value={props.body}></input>
        </p>
        <p>
          <input type="submit" value="update"></input>
        </p>
      </form>
    </article>
  );
}

function Nav({ topic, onChangMod }) {
  return (
    <nav>
      <ol>
        {topic.map((element) => {
          return (
            <li key={element.id}>
              <a
                href={`/read/${element.id}`}
                onClick={(e) => {
                  onChangMod(e, element.id);
                }}
              >
                {element.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function Article({ title, body }) {
  return (
    <article>
      <h2>{title}</h2>
      {body}
    </article>
  );
}

export default function Book() {
  let [topic, setTopic] = useState([
    { id: 1, title: 'Html', body: 'html is ...' },
    { id: 2, title: 'Java', body: 'css is ...' },
    { id: 3, title: 'Node', body: 'javascripy is ...' },
  ]);

  let [mode, setMode] = useState('WELCOME');
  let [id, setId] = useState(1);
  let [lastId, setLastId] = useState(4);
  let content;

  if (mode == 'CREATE') {
    content = (
      <Create
        onCreate={(title, body) => {
          setTopic([...topic, { id: lastId, title, body }]);
          setLastId(lastId + 1);
        }}
      />
    );
  } else if (mode == 'UPDATE') {
    content = <Update title="test" body="test is ..." />;
  } else if (mode == 'WELCOME') {
    content = (
      <>
        <Article title="React" body="Hello,WEB" />
        <button
          onClick={() => {
            setMode('CREATE');
          }}
        >
          CREATE
        </button>
      </>
    );
  } else if (mode == 'READ') {
    let { title, body } = topic.find((ele) => id === ele.id);
    content = (
      <>
        <Article title={title} body={body} />
        <button
          onClick={() => {
            setMode('UPDATE');
          }}
        >
          UPDATE
        </button>
      </>
    );
  }
  const onChangMod = (e, id) => {
    e.preventDefault();
    if (id == null) {
      setMode('WELCOME');
    } else {
      setId(id);
      setMode('READ');
    }
  };
  return (
    <div>
      <Header title="React" onChangMod={onChangMod} />
      <Nav topic={topic} onChangMod={onChangMod} />
      {content}
    </div>
  );
}
