// board_sql.js
const sql = {
  boardInsert: 'insert into board set ?',
  boardUpdate: 'update board set ? where ?',
  boardDelete: 'delete from board where ?',
  boardList: 'select * from  board order by board_id desc limit ? ,10',
  boardGet: 'select * from  board where ?',
  boardCount: 'select count(*) cnt from  board ',
};

module.exports = sql;
