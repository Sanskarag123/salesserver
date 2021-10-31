const MongoClient = require( 'mongodb' ).MongoClient;
require('dotenv').config()
const url =process.env.DBURL;

var _db =  MongoClient.connect( url,  { useNewUrlParser: true,useUnifiedTopology:true }) ;



module.exports =  _db;