const express = require("express")
const { nanoid } = require("nanoid")
const app = express()
const port = 5000
const obj = {
    mainUrl : "https://www.youtube.com",
    id : nanoid(5)
}
app.get( "/:id" , ( req, res ) => {
    if( obj.id == req.params.id ){
        res.redirect( obj.mainUrl )
    }
    res.send( "provided id is incorrect" )
} )
app.post( "/url", ( req, res ) => {
    obj.mainUrl = obj.body.mainUrl
    res.send( `http://localhost:${port}/${obj.id}` )
} )

app.listen(port, () => console.log( `server started at : ${port}` ))
