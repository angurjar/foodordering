import Router, { Request, Response } from 'express';
import {Register} from '../controllers/user.controller';
import {UpdateUser} from '../controllers/user.controller';
import {login} from '../controllers/user.controller';

export const router = Router();

router.post('/', Register);
router.post('/',UpdateUser)
router.post('/login', login)
// router.get('/userinfo', extractToken, verifyToken, (req, res, next) => {
//     // req.auth // scheme, token, user
//     res.json(req.auth.user);
// })




   