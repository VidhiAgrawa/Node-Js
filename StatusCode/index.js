const http = require("http")

const server = http.createServer( ( req, res ) => {
    res.statusCode = 511
    res.end( "hello server 5000" )
    // res.status(500).send("hello") ###in Express
} )


server.listen( 5000, () => console.log("Server started at 5000") )