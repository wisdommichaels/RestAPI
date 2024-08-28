import { response } from 'express';
import User from '../Models/Usermodel.js';

// question 1
export const getUser = async (req, res) => {
    const getUser = await User.find();
    console.log(getUser);
    res.json(getUser);
}

// question 2
export const addUser = async (req, res) => {
    const { name, email, password, age, } = req.body;
    try {
        const addUser = await User.create(
        {
         name : name,
         email : email,
         password : password,
         age : age,
        })
        console.log(addUser);
        res.json(addUser);
    } 
    catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Registration failed' });
    }
}

// question 3
const person = "66cf42c7d0a0d7e9c07af300"
export const updateUser = async(req, res) => {
    try {
        const updateUser = await User.findById({_id: person}); 
        console.log(updateUser);
        
        updateUser.favouriteFoods=["asjk", "djkaudh", "ndcbcuccdional"]
        const updatedUser = await updateUser.save()
        console.log (updatedUser);
        res.json(updatedUser)
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Update failed' });
    }
}

const id = "66cebc4352410a478a4d2de1"
export const deleteUser =async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(id);
        console.log(deleteUser);
        res.json(deleteUser);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Delete failed' });
    }
}