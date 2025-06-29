export function AgeRestrictionCheck( req , res , next ){
    if( req.params.age < 19 ) res.send("not Allowed")
    else AgeAboveCheck( req , res , next )
}

function AgeAboveCheck( req , res , next ){
    if( req.params.age > 61 ) res.send("Above Age")
        else next()
}