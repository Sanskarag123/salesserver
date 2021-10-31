//model  File 
const yup = require("yup");

const companySchema = new yup.ObjectSchema({
    entityId: yup.string(),
    entityName: yup.string(),
    entityType: yup.string(),
    entitySales: yup.number(),
    entityLevel: yup.number(),
    entityTargetsales: yup.number(),
    progress: yup.number(),
    parent: yup.string(),
    children: yup.array()

});
module.exports = companySchema;