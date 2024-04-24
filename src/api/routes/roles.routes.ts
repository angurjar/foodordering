import Router ,{Response,Request} from 'express'
import {CreateRole} from '../controllers/user.role.controller'
export const routes=Router()

routes.post('/',CreateRole)