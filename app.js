const express = require("express")
const path = require("path")
const app = express()

const PORT = 3030
app.listen(PORT, ()=>
    {console.log("Servidor corriendo en puerto " + PORT )}
    )

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req,res)=>
    {res.sendFile(path.join(__dirname, "./views/home.html"))}
    )

app.get("/register", (req,res) =>
    {res.sendFile(path.join(__dirname, "./views/register.html"))}
    )

app.get("/login", (req,res)=>
    {res.sendFile(path.join(__dirname, "./views/login.html"))}
    )