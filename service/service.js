let UnitTypes = require('../Utlity/UnitTypes');

class Service {
    convert(body, callback) {
        if(body.Measurements=='TEMPERATURE')
        {
            UnitTypes.convertTemperature(body, (err, result) => {
                if (err) {
                    callback(err);
                } else {
                    callback(null, {result});
                }
            });
        }
        UnitTypes.checkForType(body, (err, result) => {
            if (err) {
                callback(err);
            } else {
                let conversionFactor = (result.values2 / result.values1);
                callback(null, {conversionFactor});
            }
        });
    }
}

module.exports = new Service();