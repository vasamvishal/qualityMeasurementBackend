let UnitTypes=require('../Utlity/UnitTypes');
class Service {
    convert(body, callback) {
        console.log("service",body);
        UnitTypes.convert(body,(err,result)=>{
            if(err)
            {
                callback(err);
            }
            else{
                 let conversionFactor=(result.values2/result.values1);
                callback(null,{conversionFactor});
            }
        });
    }
}
module.exports=new Service();