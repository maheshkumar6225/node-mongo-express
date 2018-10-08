let express = require('express');
let router = express.Router();
let userController = require('./user')

router.get('/', (req, res, next) => {
  let response = userController.getLogin(req, res, next);
  res.json({status:true, data:response});
});

router.post('/',async (req, res, next) => {
    try{
        let response = await userController.addUserDeatils(req, res, next);
        res.send({status:true, data:response});
    } catch(ex){
        console.log(ex)
    }
  
})


module.exports = router;