var oracledb = require('oracledb');
console.log('fsdfa')
oracledb.getConnection(
  {
    user          : "ib_dev",
    password      : "ib_dev",
    connectString : "10.254.253.31:1521/cmsdcdev"
  },
  function(err, connection) {
    if (err) {
      console.error(err.message);
      return;
    }
    connection.execute(
      `select * from pub_employee
       WHERE account like :id`,
      ['liang%'],  // bind value for :id
      function(err, result) {
        if (err) {
          console.error(err.message);
          doRelease(connection);
          return;
        }
        console.log(result);
        doRelease(connection);
      });
  });

function doRelease(connection) {
  connection.close(
    function(err) {
      if (err)
        console.error(err.message);
    });
}