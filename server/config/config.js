const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/merndb";
mongoose.set("strictQuery", false);
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("♥ DB is connected ♥"))
  .catch((error) => console.log("Error en la DB " + error));
