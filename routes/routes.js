//Routes File 
var express = require('express');
var router = express.Router();
var entyservice = require('../services/entityservice');
var constant = require('../constants/errromsg');
router.get('/', function(req, res, next) {
     //Do whatever...
})
router.get('/sales/:id', async function(req, res, next) {
     try{
          const entyId = req.params.id;
          const sales = await entyservice.getsales(entyId);
          res.status(200).json({status: "success", message: sales}) 
     } catch(err){
          res.status(500).send(constant.INERNALERROR);
     }
});
router.post('/createntity', async function(req, res, next){
     try{
          const entityId = req.body;
          await entyservice.createEntity(entityId);
          res.status(200).json({status: "success", message: "Entity created"})
     } catch( err){
          res.status(500).send(constant.INERNALERROR);
     }
});
router.delete('/deleteentity', async function(req, res, next){
      try{
          const entityId = req.body;
          await entyservice.deleteentity(entityId);
          res.status(200).json({status: "success", message: "Entity deleted"})
     } catch( err){
          res.status(500).send(constant.INERNALERROR);
     }
})

module.exports = router;