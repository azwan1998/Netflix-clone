const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const { json } = require("express");

dotenv.config();

mongoose.set('strictQuery',false);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
})
.then(() => console.log('DB connection successfull'))
.catch((err) => console.log(err));

app.use(json());
//Login and Register
app.use("/api/auth" , authRoute);

//user
app.use("/api/users" , userRoute);

app.listen(8800, () =>{
    console.log("backend is running bro");
});