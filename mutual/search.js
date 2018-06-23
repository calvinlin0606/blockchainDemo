var mysql = require('mysql');
var dbConfig = require('../database/databaseConfig');
var blockSQL = require('../database/searchBlockSQL');

var pool = mysql.createPool(dbConfig.mysql);

var responseJSON = function (res, req) {
    if (typeof ret == 'undefined') {
        res.json({ code: '-200', msg: 'Failed to query' });
    }
};