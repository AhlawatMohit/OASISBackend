const express = require("express");
require('dotenv').config();
const app = express();  
const cors = require("cors");
const DBconnection = require("./DBConnect/DB");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth"); 
const PORT = process.env.PORT || 8080;

//DataBase Conncetion
DBconnection();

//MiddleWares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send(`Hello server is live at port ${PORT}`);
});

//Routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes); 

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
