class UnitTypes {
    convertion = (body, callback) => {
        let values1 = body.array.find(o => o.Type == body.body.convertTo).values;
        let values2 = body.array.find(o => o.Type == body.body.Unit).values * body.body.Values;
        let req = {values1, values2};
        console.log(req);
        return callback(null, req);
    };
    checkForType = (body, callback) => {
        if (body.Measurements == 'LENGTH') {
            let array = [
                {values: 1, Type: "INCHES"},
                {values: 12, Type: "FEET"},
                {values: 36, Type: "YARD"},
                {values: 0.393701, Type: "CENTIMETER"}
            ];
            let req = {array, body}
            this.convertion(req, callback);
        } else if (body.Measurements == 'VOLUME') {
            const array = [
                {values: "3780", Type: "GALLON"},
                {values: "1000", Type: "LITRES"},
                {values: "1", Type: "MILLILITRES"}
            ];
            let req = {array, body}
            this.convertion(req, callback);
        } else if (body.Measurements == 'WEIGHT') {
            let array = [
                {values: 1, Type: "KILOGRAM"},
                {values: 0.001, Type: "GRAM"},
                {values: 1000, Type: "TONNE"},
            ]
            let req = {array, body}
            this.convertion(req, callback);
        }
    }
    convertTemperature = (body, callback) => {
        if (body.convertTo == 'CELCIUS' && body.Unit=='FARHENIET') {
            let temperature1 = ((body.Values - 32) * 5 / 9);
            return callback(null, {temperature1});
        } else if (body.Unit == 'CELCIUS'&& body.convertTo=='FARHENIET') {
            let temperature2 = ((body.Values * 9 / 5)+32);
            return callback(null, {temperature2});

        }
    }
}


module.exports = new UnitTypes();