const express = require("express")
const app = express()

app.use( express.json() )
app.use( express.urlencoded({extended : false}) )

let books = ["pride and prejudice","ikigai","atomic habits"]

app.get( "/", ( req, res ) => {
    res.send( books )
} )
app.get( "/:id", ( req, res ) => {
    const id = req.params.id
    res.send( books[id] )
} )
app.post( "/", ( req, res ) => {
    const name = req.body.name 
    books.push(name)
    res.send( "post done" )
} )
app.put( "/:id", ( req, res ) => {
    const id  = req.params.id
    books[id] = req.body.value
    res.send("put complete")
} )
app.delete( "/:value", ( req, res )=>{
    const value  = req.params.value
    books = books.filter( ( v, i ) => v != value  )
    res.send("delete complete")
} )

app.listen(5000 , () => console.log("Server Started http://localhost:5000/"))