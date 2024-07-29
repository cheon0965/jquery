function Reply({ id, title, writer }) {
  return (
    <>
      <span> {id} </span>
      <span> {title} </span>
      <span> {writer} </span>
    </>
  );
}

export default function Replys({ datas }) {
  return datas.map((ele) => {
    return (
      <div key={ele.id}>
        <Reply {...ele} />
      </div>
    );
  });
}
