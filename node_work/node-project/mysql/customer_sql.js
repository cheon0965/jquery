const sql = {
  customerInsert: 'insert into customer set ? ',
  customerUpdate: 'update customer set ? where ?',
  customerDelete: 'delete from customer where ?',
  customerList: 'select * from  customer ORDER BY 1 DESC ',
  customerListPage: 'select * from  customer orders ORDER BY 1 DESC limit ?  offset ? ',
  customerGet: 'select * from  customer where ?',
};

module.exports = sql;
