const express = require("express")
const app = express()
const mongoose = require("mongoose")
const port = 5000
app.use( express.urlencoded({extended:false}) )
app.use( express.json() )
mongoose.connect( "mongodb://127.0.0.1:27017/LEarning_DB" )

const user = mongoose.model( "vidhi", new mongoose.Schema({
    username : { type : String },
    enrollment : { type : Number }
}) )
app.get( "/data", async( req, res ) => {
    const data = await user.find()
    res.send(data)
} )

app.get( "/:enroll", async( req, res ) => {
    const enrolll = req.params.enroll
    const data1 = await user.findOne({
        enrollment: enrolll
    })
    if( !data1 )res.send("Invalid data")
        res.send(data1)
    
} )

app.post( "/", async ( req, res ) => {
    const username = req.body.username
    const enrollment = req.body.enroll
    await user.create({
        username : username, 
        enrollment : enrollment
    }).then( () => console.log("respponse send") )
    .catch( (err) => console.log("error hai") )
    res.redirect( "/data" )
} )

app.patch( "/:enroll", async( req, res ) => {
    const username = req.body.username
    // const enrollment = req.body.enroll
    const enrolll = req.params.enroll
    
    const update = await user.findOneAndUpdate( {
        enrollment : enrolll
    },
    {
        $set : {
            username : username
        }
    }
)

} )
app.delete( "/:enroll", async( req, res ) => {
    const enrolll = req.params.enroll
    const deleteing = await user.findOneAndDelete({
        enrollment : enrolll
    })
    
} )
app.get( "/", ( req, res ) => {
    res.send(
        `<form method="post" action="/">
            <input placeholder = "write username" name = "username">
            <input placeholder = "write enroll" name = "enroll">
            <button type = "submit">Submit</button>
        </form>`
    )
} )
app.listen(port, () => console.log( `Server started at : http://localhost:${port}` ))