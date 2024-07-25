// board_sql.js
const sql = {
  boardInsert: 'insert into board set ?',
  boardUpdate: 'update board set ? where ?',
  boardDelete: 'delete from board where ?',
  boardList: 'select * from  board',
  boardGet: 'select * from  board where ?',
};

module.exports = sql;
