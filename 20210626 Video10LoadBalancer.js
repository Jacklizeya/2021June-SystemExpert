const express = require("express")
const app = express()

const port = process.env.PORT

app.listen(port, ()=> {console.log(`Listening on port ${port}`)})


const mongoose = require("mongoose")
const mongoAtlasUrl = "mongodb+srv://fullstackp3:fullstackp3@canbudget.i8atz.mongodb.net/canbudget?retryWrites=true&w=majority"

mongoose.connect(mongoAtlasUrl, {useUnifiedTopology: true, useNewUrlParser: true })
  

const db = mongoose.connection
db.on("error", (err) => console.error("MongoDB connection error!", err))
db.once("open", () => console.log("MongoDB is now connected! @ ", mongoAtlasUrl))

app.get("/", async (req, res) => {
    console.log(req.headers)
    res.send(`hello from port ${port}`)
})


// on terminal do: PORT=5000 nodemon server
// another terminal: PORT=5001 nodemon server
