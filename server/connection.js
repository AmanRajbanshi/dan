const mongoose = require("mongoose");

mongoose.connect(process.env.DB_Connection,
    { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true },
    (err) => {
      if (!err) {
        console.log("connected to database");
      } else {
        console.log("No Connection");
      }
    }
  );