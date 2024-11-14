import { Router } from "express";
import {dashboard,users} from '../controllers/main.controller.js'
const router = Router();

router.get("/",dashboard)
router.get("/users",users)

export default router;