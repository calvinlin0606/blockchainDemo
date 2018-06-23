var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "demo"
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blockchain query demonstration' });
});

router.get('/searchBlock', function (req, res, next) {
  var blockID = req.query.blockId;
  var timeStart = Math.floor(new Date().getTime());
  console.log(timeStart);

  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM data WHERE blockId = '"+blockID+"'", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

  var time = Math.floor(new Date().getTime()) - timeStart;

  res.render('search_result', { blockId: blockID, time: time + 'ms' });
});

module.exports = router;
