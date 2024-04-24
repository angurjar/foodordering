import { Request, Response} from "express";
import { User } from "../models/user.model";
import {getToken} from"../middleware/auth/user.auth"

export const Register = async(req: Request, res: Response) => {
  const user=await User.create({ email: req.body.email,username:req.body.username,password:req.body.password })
  try {
    console.log('user created successfully')
    }
    catch{
      console.log()
    }
  }
  
 export const login=(req:Request,res:Response)=>{
 User.findOne({email:req.body.email,password:req.body.password}).then((user)=>
{
   if(user!){
   res.status(401).send('user not found ')
}
else{
    getToken(user,(err, token)=>{
      res.json({
        user:user,
        token:token
      })
    })
}
 })
.catch((error)=>{

})
  }




export const UpdateUser=async(req:Request,res:Response)=>{
 
  const user =await User.update( { email:req.body.email }, 
  {
    where: { id: 1 },
    returning: true, 
  })
  try{
   
    if(!user){
        return res.status(404).send()
        console.log('user is not found')
    }
  }
  catch{

    console.log('error')
    
  }
}


export const deleteUser=(req:Request,res:Response)=>{
     User.destroy({where:{ email:req.body.email}}).then(()=>{
console.log('')
     }).catch(()=>{
      console.log('error ')
     })

}


