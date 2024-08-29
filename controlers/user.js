// import { response } from 'express';
import User from '../Models/Usermodel.js';

// question 1: Fetch all users
export const getUser = async (req, res) => {
    // Retrieve all users from the database
    const getUser = await User.find();
    
    // Log the retrieved users to the console
    console.log(getUser);
    
    // Send the list of users as a JSON response
    res.json(getUser);
}

// question 2: Add a new user
export const addUser = async (req, res) => {
    // Destructure the required fields from the request body
    const { name, email, password, age } = req.body;
    
    try {
        // Create a new user in the database with the provided data
        const addUser = await User.create({
            name: name,
            email: email,
            password: password,
            age: age,
        });
        
        // Log the newly created user to the console
        console.log(addUser);
        
        // Send the newly created user as a JSON response
        res.json(addUser);
    } 
    catch (error) {
        // Log any errors to the console
        console.error(error);
        
        // Send a 400 status with an error message if registration fails
        res.status(400).json({ Message: 'Registration failed', Error: error });
    }
}

// question 3: Update an existing user
export const updateUser = async(req, res) => {
    // Destructure the required fields from the request body
    const {_id, name, age, favouriteFoods} = req.body;
    
    try {
        // Find the user in the database by ID
        const updateUser = await User.findById(_id);
        
        // Update the user's fields if they are provided in the request body
        name && (updateUser.name = name);
        age && (updateUser.age = age);
        favouriteFoods && (updateUser.favouriteFoods = favouriteFoods);
        
        // Log the updated user (before saving) to the console
        console.log(updateUser);
        
        // Save the updated user back to the database
        const updatedUser = await updateUser.save();
        
        // Log the updated and saved user to the console
        console.log(updatedUser);
        
        // Send the updated user as a JSON response
        res.json(updatedUser);
    } 
    catch (error) {
        // Log any errors to the console
        console.error(error);
        
        // Send a 400 status with an error message if updating fails
        res.status(400).json({ Message: 'Registration failed', Error: error });
    }
}

// question 4: Delete a user
export const deleteUser = async (req, res) => {
    try {
        // Find and delete the user by ID, which is passed as a URL parameter
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        
        // Log the deleted user to the console
        console.log(deleteUser);
        
        // Send the deleted user as a JSON response
        res.json(deleteUser);
    } 
    catch (error) {
        // Log any errors to the console
        console.log(error);
        
        // Send a 400 status with an error message if deletion fails
        res.status(400).json({ Message: 'Registration failed', Error: error });
    }
}
