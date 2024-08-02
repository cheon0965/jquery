// board_sql.js
const sql = {
  commentInsert: 'insert into t_comment_board set ?',
  commentUpdate: 'update t_comment_board set ? where ?',
  commentDelete: 'delete from t_comment_board where ?',
  commentList: 'select * from  t_comment_board order by 1 desc limit ? ,10',
  commentGet: 'select * from  t_comment_board where ?',
  commentCount: 'select count(*) cnt from  t_comment_board ',
};

module.exports = sql;
