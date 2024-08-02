// book_sql.js
const sql = {
  bookInsert: 'insert into t_book set ?',
  bookUpdate: 'update t_book set ? where ?',
  bookDelete: 'delete from t_book where ?',
  bookList: 'select * from  t_book order by 1 desc limit ? ,10',
  bookGet: 'select * from  t_book where ?',
  bookCount: 'select count(*) cnt from  t_book ',
};

module.exports = sql;
