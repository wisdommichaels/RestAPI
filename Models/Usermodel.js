import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    favouriteFoods: {
        type: [String],
        // foods: ['Pizza', 'Pasta', 'Burger', 'Salad', 'Pancake']
    },

    // password: {
    //     type: String,
    //     required: true
    // },
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     match: [/.+\@.+\..+/, "Please enter a valid email"]
    // },
    age: {
        type: Number,
        required: true,
    }
}) 

const User = mongoose.model('User', userSchema);

export default User;