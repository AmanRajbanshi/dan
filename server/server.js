const express = require('express')
const app = express();
const PORT = process.env.PORT || 1000;
const mongoose = require("mongoose");
require("dotenv").config()

app.use(express.json());
app.get("/", (req, res)=> {
    res.send("Hello from demo app!");
  });

//Routes
const contactroute = require("./routes/contactroute");
const SignupRoute = require("./routes/signupRoute");
const SignInRoute = require("./routes/signinRoute");
const ReviewRoute = require("./routes/reviewRoute");
const ProductRoute = require("./routes/productRoute");



//Middlewares
app.use("/api", contactroute);
app.use("/api", SignupRoute);
app.use("/api", SignInRoute);
app.use("/api", ReviewRoute);
app.use("/api", ProductRoute);




mongoose.connect(process.env.DB_CONNECTION,{
    useNewUrlParser:true,
},
(err) => {
   try {
       console.log('connected to db')
   } catch (err) {
       console.log(err.message)
   }
  });

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
});