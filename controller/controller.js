var service = require('../service/service');

class Controller {
    conversion(req, res) {
        req.checkBody('measurement', 'Should not be empty').notEmpty();
        req.checkBody('convertTo', 'Should not be empty').notEmpty();
        req.checkBody('Unit', 'Should not be empty').notEmpty();
        req.checkBody('Values', 'Should not be empty').notEmpty();
        const errors = req.validationErrors();
        if (errors) {
            return res.status(422).json({
                errors: errors
            })
        }
        let responseResult = {};
        let body = {
            "Measurements": req.body.measurement,
            "convertTo": req.body.convertTo,
            "Unit": req.body.Unit,
            "Values": req.body.Values
        }
        console.log(body);
        service.convert(body, (err, result) => {
            if (err) {
                responseResult.sucess = false;
                responseResult.message = "Validation Error";
                responseResult.errors = err;
                res.status(420).send(responseResult);
            } else {
                responseResult.sucess = true;
                responseResult.message = "Result";
                responseResult.result = result;
                res.status(200).send(responseResult);
            }
        })
    }
}

module.exports = new Controller();