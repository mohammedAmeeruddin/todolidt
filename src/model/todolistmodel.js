const mongoose= require("mongoose");

const todolistSchema =mongoose.Schema(
    {
    Titel:String,
    Discription:String,
    
}
);

module.exports=mongoose.model("todo",todolistSchema);