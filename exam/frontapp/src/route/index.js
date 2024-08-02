import Board from '../board/boardList';
import BoardInfo from '../board/BoardInfo';
import BoardInsert from '../board/BoardInsert';

function Section() {
  return (
    <section>
      <div>
        <h1>커뮤니티 게시판입니다.</h1>
      </div>
    </section>
  );
}

let route = [
  { path: '/', element: <Section /> },
  { path: '/board', element: <Board /> },
  { path: '/board/:no', element: <BoardInfo /> },
  { path: '/board/insert', element: <BoardInsert /> },
  { path: '/board/update/:no', element: <BoardInsert /> },
];

export default route;
