let mongoose = require('mongoose');
let UserModel = require('../../models/user/index')

module.exports = {
    getLogin,
    addUserDeatils
}

async function getLogin(req) {
    return await UserModel.getDetails(req.params.id);
}

async function addUserDeatils(req) {
  return await UserModel.addUserDeatils(req.body);
}