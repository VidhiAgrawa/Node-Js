const express = require("express")
const { nanoid } = require("nanoid")
const app = express()
const port = 5000

app.use( express.json() )
app.use( express.urlencoded( {extended: false} ) )
const map = new Map()

app.get( "/:id", ( req, res ) => {
    const id = req.params.id
    if( map.has(id) ){
        res.redirect(map.get(id))
        }
        res.send( "invalid id" )
} )

app.get( "/", ( req, res ) => {
    res.send( 
        `<form method="post" action="/url">
            <input placeholder="enter url" name="url">
            <button type="submit">send</button>
        </form>`
     )
} )


    app.post( "/url", ( req, res ) => {
    const id = nanoid(5)
    map.set( id, req.body.url )
    console.log(map)
    res.send( `http://localhost:${port}/${id}` )
} )
app.listen( port, () => console.log( "Server started at : 5000" ) )