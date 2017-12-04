var pg = require('pg');

// var client = new pg.Client({
//   database: 'books-dev'
// });

// //connect to db
// client.connect(function(err){
//   if (err) throw err;
//
//   //execut a query
//   client.query('SELECT * from books', [], function(err, result){
//     if (err) throw err;
//
//     //just print the results to the console
//     console.log(result.rows);
//
//     //disconnect the Client
//     client.end(function(err){
//       if (err) throw err;
//     });
//   });
// });

var pool = new pg.Pool({
  database: 'books-dev'
});

  pool.query('SELECT * from books', [], function(err, result){
    if (err) throw err;

    //just print the results to the console
    console.log(result.rows);
  });
