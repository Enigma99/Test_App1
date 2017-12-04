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
  // database: 'books-dev' // localdb,
  database: 'd2ceiis1l0nvhm',
  user: 'nfmxxrdcpvnpqv',
  password: '2ab10e6a3d0f75a236e499914333ca19d0d7b8af26e347093fbd82e04bed5d3c',
  host: 'ec2-107-20-188-239.compute-1.amazonaws.com',
});

  pool.query('SELECT * from books', [], function(err, result){
    if (err) throw err;

    //just print the results to the console
    console.log(result.rows);
  });
