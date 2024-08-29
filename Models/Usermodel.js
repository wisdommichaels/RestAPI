import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true,
    },
    favouriteFoods: {
        type: [String],
    }
}) 

const User = mongoose.model('User', userSchema);

export default User;