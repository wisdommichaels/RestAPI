import dotenv from "dotenv"
import connectdb from "./utils/db.js";
import express from "express";
import User from "./Models/Usermodel.js";
import { addUser, deleteUser, getUser, updateUser } from "./controlers/user.js";
dotenv.config()
connectdb();
const app = express();

app.use(express.json());


app.get('/', (req, res) =>{
    res.end ("server is working")
})

app.route('/User/:id')
    .get(getUser)
    .post(addUser)
    .put(updateUser)
    .delete(deleteUser)



app.listen(4005, ()=>{
    console.log("Server is running on port 4005");
});