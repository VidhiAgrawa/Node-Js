const express = require("express");
const { data } = require("./api");
const app = express()

app.get( "/", ( req, res ) => {
    res.send( data )
} )
app.listen(5000 , () => console.log( "app started at 5000" ))