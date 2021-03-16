import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true, useFindAndModify: false,  useUnifiedTopology: true
});

const db = mongoose.connection;

const hadleOpen = () => console.log("Connected to db");
const hadleError = error => console.log(`There is a ${error}`);

db.once("open", hadleOpen);
db.on("error", hadleError)