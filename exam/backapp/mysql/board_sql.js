// board_sql.js
const sql = {
  boardInsert: 'insert into t_board_board set ?',
  boardUpdate: 'update t_board_board set ? where ?',
  boardDelete: 'delete from t_board_board where ?',
  boardList: 'select * from  t_board_board order by 1 desc limit ? ,10',
  boardGet: 'select * from  t_board_board where ?',
  boardCount: 'select count(*) cnt from  t_board_board ',
};

module.exports = sql;
