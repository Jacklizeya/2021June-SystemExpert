const express = require("express")
const app = express()
app.listen(5000, ()=> {console.log("Listening on port 5000")})


const mongoose = require("mongoose")
const mongoAtlasUrl = "storage in you dotevn"

mongoose.connect(mongoAtlasUrl, {useUnifiedTopology: true, useNewUrlParser: true })
  

const db = mongoose.connection
db.on("error", (err) => console.error("MongoDB connection error!", err))
db.once("open", () => console.log("MongoDB is now connected! @ ", mongoAtlasUrl))

const userSchema = new mongoose.Schema({
    user: { type: String },
    type: { type: String }
  });

const User = mongoose.model("User", userSchema, "user")
// have a mirror inside server called User in Server === user collection in Atlas

app.get("/", async (req, res) => {
    let data = await User.find({});
    res.send(data)
})
