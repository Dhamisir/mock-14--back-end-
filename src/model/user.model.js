const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    level: {
        type: String,
        enum: ["Low", "Medium", "High"]
    },
    score: {
        type: Number,
        default: 0
    }
})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;