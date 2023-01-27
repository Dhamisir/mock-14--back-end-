const userModel = require("../model/user.model");

async function userAddController(name, level, score) {
    try {
        let data = await userModel.create({ name, level, score });
        return {
            status: 200,
            payload: { msg: data }
        }
    } catch (error) {
        return {
            status: 401,
            payload: { msg: error.message }
        }
    }
}

async function userEditController(id, score) {
    try {
        let data = await userModel.findByIdAndUpdate(id, { $set: { score } }, { new: true });
        return {
            status: 200,
            payload: { msg: data }
        }
    } catch (error) {
        return {
            status: 401,
            payload: { msg: error.message }
        }
    }
}

module.exports = { userAddController, userEditController };