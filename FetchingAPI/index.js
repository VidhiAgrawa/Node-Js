const express = require("express")
const app = express()

app.use( express.urlencoded({extended : false}) )
app.use(express.json());

let data = [];

(
    async () => {
    try {
        const url = await fetch("https://jsonplaceholder.typicode.com/todos")
        const api = await url.json()
        data = api

        
    } catch (err) {
        console.log(err)
    }
}
)();
app.get( "/", ( req, res ) => {
    res.send( data )
} )
app.post( "/", ( req, res ) => {
    const title = req.body.title
    data.push(title)
    res.send( " data posted" )
} )
app.put( "/:id", ( req, res ) => {
    const id = parseInt(req.params.id)
    const { title , userId , completed } = req.body
    const index = data.findIndex( (v) => v.id == id )
    data[index] = { id, title, userId , completed }
    res.send( " data putted" )
} )
app.patch( "/", ( req, res ) => {
    const id = req.params.id
    const { title } = req.body
    const index = data.findIndex( ( v ) => v.id == id )
    data[index] = { title }
    res.send( " data patched" )
} )
app.delete( "/:id", ( req, res ) => {
    const id = parseInt(req.params.id)
    data = data.filter( ( v, i ) => i != id )
    res.send( " data posted" )
} )
app.listen(5000 , () => console.log("Server strted at port 5000"))
