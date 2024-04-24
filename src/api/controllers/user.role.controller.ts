import  {Request, Response} from 'express'
 import {UserRole} from '../models/roles.model'

 export const CreateRole=async(req:Request,res:Response)=>{
  const roles  =await UserRole.create({id:req.body.id,rolename:req.body.rolename})
  try{
    if(roles){
        res.status(200).json('role has been  created')
       
    }
    else{
        res.status(400).json('role has been  not created')
    }
  }
  catch(err){
    res.status(500).json('Internal server error');
    console.log('internal server error',err)
  }

 }
 