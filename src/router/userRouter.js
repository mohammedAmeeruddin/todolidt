const express = require("express");
const {signUpuser,loginUser,getAllusers,getAuser,updateUser,deleteUser} = require("../controller/usercontroller");
const router = express.Router();
router.post("/create/signUpuser",signUpuser);
router.post("/login/user",loginUser);
router.get("/getusers",getAllusers);
router.get("/getauser/:id",getAuser);
router.put("/update/user/:id",updateUser);
router.delete("/delete/user/:id",deleteUser);

module.exports=router;