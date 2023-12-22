const mongoose = require("mongoose");


module.exports = () => {


    try {
        mongoose.connect(process.env.DB);
        console.log("Connected to DataBase Successfully");
    } catch (error) {
        console.log(error);
    }
};