 import express from 'express'
 const router = express.Router()
 import {test} from "../controllers/User.controller.js"

 router.get("/test",test);

 export default router;