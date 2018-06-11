// const express = require('express');
// const app = express();
// const mysql =require('mysql');

// var pool = mysql.createPool({
//     host: '127.0.0.1',
//     user: 'root',
//     password: '',
//     database: 'house',
//     port: '3306'
// });

// app.use('/indexdata',(req,res)=>{
//     const getHouse=' SELECT hid,address,houseType,area,price FROM houseinfo';
//     pool.query(getHouse,(err,data)=>{
//       if(err){
//          res.status(500).send('err').end();
//       }else{
//         console.log(data);
//         res.send(data).end();
//       }
//     });
// });

// app.listen(8080);