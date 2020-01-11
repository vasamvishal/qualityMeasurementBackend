

class UnitTypes {
    convertion = (body, callback) => {
        let values1=body.array.find(o=>o.Type==body.body.convertTo).values;
        let values2=body.array.find(o=>o.Type==body.body.Unit).values*body.body.Values;
        let req = {values1, values2};
        return callback(null, req);
    };
    convert=(body, callback) =>{
        if (body.Measurements == 'LENGTH') {
            let array = [
                {values: 1, Type: "INCHES"},
                {values: 12, Type: "FEET"},
                {values: 36, Type: "YARD"},
                {values: 0.393701, Type: "CENTIMETER"}
            ];
            let req={array,body}
            this.convertion(req,callback);
        } else if (body.Measurements == 'VOLUME') {
            const array = [
                {values: "3780", Type: "GALLON"},
                {values: "1000", Type: "LITRES"},
                {values: "1", Type: "MILLILITRES"}
            ];
            let req={array,body}
            this.convertion(req,callback);
        }
    }
}

module.exports = new UnitTypes();