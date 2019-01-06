let mongoose = require('mongoose');
let UserModel = require('../../models/user/index')

module.exports = {
    getLogin,
    addUserDeatils
}

async function getLogin(req) {
    try{
        return await UserModel.getDetails(req.params.id);
    } catch(ex){
        throw ex;
    }
}

async function addUserDeatils(req) {
    try {
        return await UserModel.addUserDeatils(req.body);
    } catch(ex){
        throw ex;
    }
 
}