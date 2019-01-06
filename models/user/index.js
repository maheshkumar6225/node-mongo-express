let mongoose = require('mongoose');
let userSchema = require('./user-schema');

userSchema.statics = {
    getDetails,
    addUserDeatils
}

userSchema.index({ username: 1, background: 1 })

userSchema.pre('save', async function(next){
    let doc = this;
    if(doc.username){
        console.log(username);
    }
});


UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;

async function getDetails(userId) {
    let query = {};
    query._id = userId;
    let userDetails = await userModel.find(query).lean().exec();
    if (!userDetails) {
        console.log("No User Found!");
    }
    return userDetails
}

async function addUserDeatils(userData) {
    let user = new UserModel(userData);
    return await user.save();
}
