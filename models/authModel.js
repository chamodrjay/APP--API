const mongoose = require("mongoose")
const Schema = mongoose.Schema

const AuthSchema = new Schema({
        username: {
            type: String,
            require: true,
            min: 3,
            max: 20,
            unique: true
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        }
    },
    {timestamps: true}
);

const auth = mongoose.model("Auth",AuthSchema);
module.exports = auth