const { default: mongoose } = require("mongoose");

const userSchema =mongoose.Schema(
    {
        Email:String,
        password:String,
        user_name:String
    }
);

module.exports= mongoose.model("user",userSchema);