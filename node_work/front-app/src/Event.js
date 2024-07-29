function Button(obj) {
  return <button onClick={obj.onClick}>{obj.children}</button>;
}

function PlayButton({ children }) {
  return (
    <Button
      onClick={() => {
        alert(children);
      }}
    >
      {children}
    </Button>
  );
}

function UploadButton({ children }) {
  return (
    <Button
      onClick={() => {
        alert(children);
      }}
    >
      {children}
    </Button>
  );
}

export default function Toolbar() {
  return (
    <>
      <PlayButton>PlayButton</PlayButton>
      <UploadButton>UploadButton</UploadButton>
    </>
  );
}
