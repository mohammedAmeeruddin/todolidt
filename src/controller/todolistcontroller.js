 
 const todolistSchema =require("../model/todolistmodel");

exports.createtodolist=async(req,res)=>{
   try {
    const {Titel}=req.body;
    const {Discription}=req.body;
    
    if(!Titel || !Discription  ){
        return res.status(404).json({
            message:"please fill the detaile"
        });
    }
    
  
        const data ={
            Titel,
            Discription,
        };
        await todolistSchema.create(data);
        return res.status(200).json({
            message:"product created sucessfully"
        });
    
   } catch (error) {return res.status(500).json({
    message:error.message
   });
    
   }

}

exports.getTodolists=async(req,res)=>{
    try {
        const todolists =await todolistSchema.find();
        return res.status(200).json({
           todolists
        })

        
    } catch (error) {
        return res.status(500).json({
            message:error.message
        });
        
    };
};


exports.updateTodolist = async(req,res)=>{
    try {
        // const {token}=req.query;
         const {Titel,Discription,id}=req.body;
        // // if(!Titel || !Discription){
        // //     return res.status(404).json({
        // //         message:"give the details"
        // //     });
        // //}
        // const {id} = await jwt.verify(token,"aabbbccddeefgh");
        
     const newtodolist =await todolistSchema.findByIdAndUpdate(id,
    
        {Titel,Discription},
        {new:true}
     );
     return res.status(200).json({newtodolist});
        
    } 
    catch (error) {
        return res.status(500).json({
            message:error.message
        });
        
    };
};
exports.deletetodolist =async(req,res)=>{
    try {
        const {id}=req.params;
        await todolistSchema.findByIdAndDelete(id);
        return res.status(200).json({
            message:" deleted sucessfully"
        })
    } catch (error) {
        
        return res.status(500).json({
            message:error.message
        });
    };
}