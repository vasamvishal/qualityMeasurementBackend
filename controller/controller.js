var service=require('../service/service');
class Controller {
    conversion(req,res){

        let body={
            "Measurements":req.body.measurement,
            "convertTo":req.body.convertTo,
            "Unit":req.body.Unit,
            "Values":req.body.Values
        }
        console.log(body);
        service.convert(body,(err,result)=>{
            if(err)
            {
                res.status(420).send(err);
            }
            else {
                res.send(result);
            }
        })
    }
}
module.exports=new Controller();