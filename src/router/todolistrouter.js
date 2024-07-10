const express =require("express");
const{createtodolist,getTodolists,updateTodolist,deletetodolist}=require("../controller/todolistcontroller");
const {authMiddleware}=require("../middleware/auth");
const router=express.Router();

router.post("/create/todolist",authMiddleware,createtodolist);
router.get("/getalltodolist",authMiddleware,getTodolists);
router.put("/todolist/update",authMiddleware,updateTodolist);
router.delete("/todolist/delete/:id",deletetodolist)


module.exports=router;