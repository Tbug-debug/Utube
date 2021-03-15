import mongoose from "mongoose";


mongoose.connect("mongodb://localhost:27017/we-tube",{
    useNewUrlParser: true, useFindAndModify: false,  useUnifiedTopology: true
});

const db = mongoose.connection;

const hadleOpen = () => console.log("Connected to db");
const hadleError = error => console.log(`There is a ${error}`);

db.once("open", hadleOpen);
db.on("error", hadleError)