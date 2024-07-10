const User = require("../model/usermodel");
const jwt = require("jsonwebtoken");

exports.authMiddleware = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if(!token){
        
        return res.status(400).json({
            message: "token is invalid",
          });
    }

    const {id} =await jwt.verify(token,"aabbbccddeefgh")
    const user =await User.findById(id);
    if(!user){
        return res.status(404).json({
            message:"user not found "
      });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};