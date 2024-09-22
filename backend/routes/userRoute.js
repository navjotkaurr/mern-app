import express from "express";
const router = express.Router();
import {   addUser, 
          getUserByEmail,
          getUsers
        } from "./userController.js";

router.route('/').get(getUsers)
router.route('/profile').get(getUserByEmail);
router.route('/addUser').post(addUser)

export default router;