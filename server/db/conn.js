const mongoose = require("mongoose");

const DB =
  "mongodb+srv://cse18107:cse18107@cluster0.nadej.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection start"))
  .catch((error) => {
    console.log(error.message);
  });
