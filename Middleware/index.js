const express = require("express")
const {AgeRestrictionCheck } = require("./middleware")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended : false }))

app.get( "/" , (req,res) => {
    console.log(req.headers)
    res.header("Vidhi" , "Wifey")
    res.send("Allowed")
} )

app.listen(5000 , () => console.log("Server started"))