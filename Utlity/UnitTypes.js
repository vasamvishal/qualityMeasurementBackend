
class UnitTypes {
 convert(body,callback){
     if(body.Measurements=='LENGTH')
     {
         let length=[
             { values: 1, Type: "INCHES" },
             { values: 12, Type: "FEET" },
             { values: 36, Type: "YARD" },
             { values: 0.393701, Type: "CENTIMETER" }
         ]
         console.log(length)
         let values1=length.find(o=>o.Type==body.convertTo).values;
         let values2=length.find(o=>o.Type==body.Unit).values*body.Values;
         let req={values1,values2};
         return callback(null,req);
     }
}
}

module.exports = new UnitTypes();