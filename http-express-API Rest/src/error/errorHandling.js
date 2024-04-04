

function errorHandling(err,req, res , next)
{
    res.status(500).json({messaje:err.messaje})
}

module.exports= errorHandling;