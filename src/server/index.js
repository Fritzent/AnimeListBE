const mongoose = require("mongoose")

mongoose["Promise"] = global.Promise;
  mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log("Connected to Database"))
    .catch(err => {
        console.log("Cannot connect to Database", err);
        process.exit();
  });