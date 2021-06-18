// To setup a quick super fast
// install express then put the code in server.js, then able to serve

const express = require("express")
const app = express()
app.listen(5000, ()=> {console.log("Listening on port 5000")})

app.get("/", async (req, res) => {
    res.send("I hear you")
})

