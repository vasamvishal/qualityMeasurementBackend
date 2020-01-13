let Units = [
    {values: 1, Type: "INCHES", MeasurementsType: "LENGTH"},
    {values: 12, Type: "FEET", MeasurementsType: "LENGTH"},
    {values: 36, Type: "YARD", MeasurementsType: "LENGTH"},
    {values: 0.393701, Type: "CENTIMETER", MeasurementsType: "LENGTH"},
    {values: 3780, Type: "GALLON", MeasurementsType: "VOLUME"},
    {values: 1000, Type: "LITRES", MeasurementsType: "VOLUME"},
    {values: 1, Type: "MILLILITRES", MeasurementsType: "VOLUME"},
    {values: 1, Type: "KILOGRAM", MeasurementsType: "WEIGHT"},
    {values: 0.001, Type: "GRAM", MeasurementsType: "WEIGHT"},
    {values: 1000, Type: "TONNE", MeasurementsType: "WEIGHT"},
];

class UnitTypes {
    conversion = (body, callback) => {
        try{
        let quantity1 = (Units.find(o => o.Type == body.convertTo).MeasurementsType);
        console.log(quantity1);
        let quantity2 = (Units.find(o => o.Type == body.Unit).MeasurementsType);
        console.log(quantity2);
            if (quantity1==quantity2) {
                if(quantity1==body.Measurements) {
                    let values1 = Units.find(o => o.Type == body.convertTo).values;
                    let values2 = Units.find(o => o.Type == body.Unit).values * body.Values;
                    let req = {values1, values2};
                    return callback(null, req);
                }
                else{
                    return callback("enter proper measurement type");
                }
            }
        } catch (e) {
            return callback("enter proper values and legit values");
        }
    }

    convertTemperature = (body, callback) => {
        if (body.convertTo == 'CELCIUS' && body.Unit == 'FARHENIET') {
            let temperature1 = ((body.Values - 32) * 5 / 9);
            return callback(null, {temperature1});
        } else if (body.Unit == 'CELCIUS' && body.convertTo == 'FARHENIET') {
            let temperature2 = ((body.Values * 9 / 5) + 32);
            return callback(null, {temperature2});
        }
        else{
            return callback({message:'Enter proper conversion value'});
        }
    }
}


module.exports = new UnitTypes();