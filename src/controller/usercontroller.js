
const User =require("../model/usermodel");
const jwt =require("jsonwebtoken");
exports.signUpuser=async(req,res)=>{
    try {
        const Email = req.body.Email;
        const password = req.body.password;
        const user_name = req.body.user_name;
        if(!Email || !password || !user_name){
            return res.status(400).json({
                message:"plise fill the details"
            });
        };
        const user =await User.findOne({Email});
        if (user) {
        return res.status(400).json({
            message:"user all ready exist"
        });
   
        
    };
    const new_user =await User.create({Email,password,user_name});
        return res.status(200).json({
            message:"signup sucessfull "
        })
        
    }

     catch (error) {
        return res.status(500).json({
            message:error.message
        });
        
    };
};

exports.loginUser= async (req,res)=>{
    try {
        const{Email,password} =req.body;
        // const {password} =//req.body;
if(!Email || !password){
    return res.status(400).json({
        message:"fill the details proply"
    });}


    const userExist =await User.findOne({Email});
    if(!userExist){
    return res.status(400).json({
    message:"user not found"
    } );
    }
    if(userExist.password=!password){
        return res.status(400).json({
            message:"please check the password"
        });
    }
    const id =userExist._id;
    const token =jwt.sign({id},"aabbbccddeefgh")
    return res.status(200).json({
        message:"login sucessfull",token
    })
    


    } catch (error) {
        return res.status(500).json({
            message:error.message
        });
        
    };
}

exports.getAllusers=async(req,res)=>{
  try {
    const Users= await User.find();
    return res.status(200).json({
        Users
    });
  }
   catch (error) {
    return res.status(500).json({
        message:error.message
    });
    
  } ; 
};

exports.getAuser =async(req,res)=>{
    try {const id =req.params.id;
        const user=  await User.findById(id);
    return res.status(200).json({
        user
    });
        
    } 
    catch (error) {return res.status(500).json({message:error.message});
        
    };
};


exports.updateUser = async(req,res)=>{
try {
    const {id}=req.params;
    const userExist= await User.findById(id);
    if(!userExist){
        return res.status(404).json({
            message:"user not fond"
        });
    }
    const {Email,password}=req.body;
    const newuser = await User.findByIdAndUpdate(
        id,
        {Email,password},
        {new:true}
    );
    return res.status(200).json({
        newuser
    })
} catch (error) {return res.status(500).json({
    message:error.message
});
    
};

};

exports.deleteUser =async(req,res)=>{
    try {
        const {id}=req.params;
        const userExist=await User.findById(id);
        if(!userExist){
            return res.status(404).json({
                message:"user not found"
            })
        }
        await User.findByIdAndDelete(id)
        return res.status(200).json({
            message:"user deleted"
        });
        
    } catch (error) {return res.status(500).json({message:error.message});
        
    };
};