const { Mongoconnect } = require('./connection');
const conn = require('./connection');
const entityschema = require('../models/companyModel');
const errorMsg = require('../constants/errromsg');
async function connect() {
  let res = await conn;
  let dbins = await res.db("tata").collection("entity");

  return dbins;
}
const createEntity =  async (enty) => {
    try{
    
       enty.entityId = (enty.entityLevel+1) +""+ round(Math.random()*1000);
    if(!entityschema.isValid(enty))
    throw errorMsg.BADINPUT;
    const entitydetail = entityschema.cast(enty);
    if(enty.parent != "")
    await(await connect()).updateOne({entityId: enty.parent}, {$push:{children: enty.entityId}});
    await(await connect()).insertOne(entitydetail);
        //await db.insertOne({man:"can"});
    } catch(err){
        console.log(err);
    }
}
const getsales = async (entityid) => {
    try{
        const sales = await (await connect()).findOne({entityId: entityid},{progress:1, entityName:1, entitySales:1, entityTargetsales:1, entityType:1});
        return sales;
    } catch(err){
        console.log(err);
    }
}
const deleteentity = async (entityId) => {
    try{
        let first = true;
        while(children.length != 0){
            const entity  = await (await connect()).findOneAndDelete({entityId: entityId}, {children: 1, parent: 1, entitySales: 1});
            if(first){
                parent = entity.parent;
                price = entity.entitySales;
                while(parent!=""){
                    const enty1 = await (await connect()).findOneAndUpdate({entityId: parent},{$inc:{entitySales: 0-price}});
                    parent = enty1.parent;
                    price = enty1.entitySales;
                }
                entityId = entity.entityId;
            }
            first = false;
        }
    } catch(err){

    }
}


//createEntity();
module.exports = { createEntity, getsales, deleteentity}
