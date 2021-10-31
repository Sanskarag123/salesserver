//Server File  
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const cors = require("cors")
const app = express();
const dbconnect = require('./services/connection');
const entysrvc = require('./services/entityservice')

app.use(cors())
app.use(bodyParser.json());

app.use('/api',routes);
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

app.get('/', function(req,res){
    res.send('connected to Server')
    entysrvc.createEntity();
})


app.listen(3000, () => {
console.log("Server listening in port 3000");
});




module.exports = app;