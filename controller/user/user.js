let mongoose = require('mongoose');
let UserModel = require('../../models/user/index')

module.exports = {
    getLogin,
    addUserDeatils
}

async function getLogin(req, res, next) {
    console.log(req);
}

async function addUserDeatils(req, res, next) {
  return await UserModel.addUserDeatils(req.body);
}