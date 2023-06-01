const { UserModel } = require("../models/UserModel");
const fs = require("fs");


async function userLogger(req,res,next){

    if(req.path=="/user/login"){
        let data = await UserModel.find(req.body);
        const logData = `Username: ${data[0].username} | Role: ${data[0].role}\n`;
        fs.appendFile("log.txt",logData,(err)=>{
            if(err) throw err
            next()
        })
    }else{
        next()
    }
}


module.exports={userLogger}