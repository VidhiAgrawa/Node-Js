const express = require("express")
const app = express()
const mongoose = require("mongoose")
const path = require("path")

app.use( express.json() )
app.use( express.urlencoded( { extended: false } ) )

app.set( "view engine", "ejs" )
app.set( "views", path.resolve("./")  )

mongoose.connect( "mongodb://127.0.0.1:27017/FormCreation" )

const user = mongoose.model( "details", new mongoose.Schema( {
    username: { type: String },
    id: { type: Number },
    age: { type: Number },
    collegeName: { type: String }

} ) )

app.get( "/get", async( req, res ) => {
    const data = await user.find()
    res.send(data)
} )
app.post( "/", async( req, res ) => {
    console.log("post method")
    const { username, id, age, collegeName } = req.body
    
    await user.create( {
        username,
        id,
        age,
        collegeName
    } ).then( () => console.log("done") ).catch( (err) => console.log("error") )
    res.redirect("/get")
} )
app.patch( "/:id", async( req, res ) => {
    const name = req.body.username
    const id = req.params.id
    const ans = await user.findOneAndUpdate( {
        id : id
    },{
        $set : { username : name } 
    } )
    res.send("Updated")
} )
app.put( "/:id", async( req, res ) => {
    const { username, age, collegeName } = req.body
    const id = req.params.id
    await user.findOneAndUpdate( {
        id : id
    },{
        $set : {
            username: username,
            age: age,
            collegeName: collegeName
        }
    } )
    res.send( "Updated whole information" )
    
} )
app.delete( "/:id", async( req, res ) => {
    const id = req.params.id
    await user.findOneAndDelete( {
        id : id
    } )
    res.send("User Deleted")
} )

app.get( "/", ( req, res ) => {
    res.render( "fileform" )
} )
app.listen( 5000, () => console.log( "Server Started at : http://localhost:5000" ) )