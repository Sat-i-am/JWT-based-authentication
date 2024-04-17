const User = require('./model.js');
const jwt = require('jsonwebtoken')
require ('dotenv').config() 

module.exports.tokenauthentication = (req,res,next)=>{
    const authHeader = req.headers['authorization']; //in authorisation header we have auth token\
   // console.log("this is req.headers",req.headers);
    console.log("this is authHeader=",authHeader);

    if( !authHeader )
        return res.json({msg: "no token exists in request"});
    const token = authHeader.split(' ')[1]; 
    console.log("this is token",token);
    jwt.verify(token, process.env.myjwtsecret, (err, decoded)=>{ //in the callback function decoded stores the decoded payload
        if(err)
            return res.json({msg: "error authenticating user",err})
        else{
            req.payload = decoded.username //so now payload will be availabe in req for later middlewares
            console.log("this is payload",req.payload)
            next();
        }
    })
}

module.exports.register = async(req, res, next)=>{ 
    try{ 
        const {username, password} = req.body; 
        const duplicate = await User.findOne({username}) //using {} bracket cause .findOne accepts object as parameter
        console.log(duplicate);
        if(duplicate)
            return res.json({msg:'username already exists',status:false})
        
        const dbUser = await User.create({
            username, 
            password
        })
       // req.json()
        return res.json({msg:'user registered successfully',status: true});
    }
    catch(err){
        return res.json({msg:'failed creating user', status: false})
    }
}
module.exports.login = async(req, res, next)=>{
    try{ 

        console.log('this is body',req.body);
        const {username, password} = req.body;
        const dbUser = await User.findOne({username}) //authenticating user in database
        if(!dbUser) 
            return res.json({msg:'no such user',status:false})
        if(dbUser.password != password)
            return res.json({msg:'password is wrong',status:false})

        const token = jwt.sign({username:username},process.env.myjwtsecret); //if password is correct then creating a jwt token
        //this way username property will be stored as payload
        return res.json({msg:'user logged in successfully',token:token, status: true,});
        }
    catch(err){
        return res.json({msg:`failed logging in user ${err}`})
    }
}


module.exports.deleteUser = async(req,res,next)=>{
    try{
        const username = req.payload;  //playload that we decoded in authentication middleware
        const dbUser =  await User.findOne({username});
        if( !dbUser )
            return res.json({msg: "no such user exists"})
        
        if(dbUser){
            await User.findByIdAndDelete(dbUser._id);
            return res.json({msg:'user deleted successfully', status: true})
        }
        else{
            return res.json({msg:'user not found', status: false})
        }
    } 
    catch(err){ 
        console.log(err)
        return res.json({msg:'error during deleting user', status: false,err})
    }
}
// module.exports.hello = async(req,res,next)=>{
//     try{
//        // console.log(this is store ,store);
//         return res.json({msg:"helloworld",status:true})
//     } catch(err){
//         console.log(err);
//         return res.json(err);
//     }
// }