async function roleValidator(req,res,next){

    let {role} = req.headers

    console.log(req.path,role)
    if((req.method=="PATCH"||req.method=="DELETE")){
        // console.log("Working")
        if(role=="admin"){
            next()
        }else{
            res.send({
                message:"Permission not granted"
            })
        }

    }else{
        next()
    }


}


module.exports={roleValidator}