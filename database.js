const mongoose = require("mongoose");
const URL ="mongodb+srv://ameeruddincodersnest:4kzBmHZj1iNFt9tr@cluster0.ndktqt2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
exports.connectdb =async()=>{
    mongoose
    .connect(URL)
    .then((res) =>console.log("your mongoose is connected"))
    .catch((error)=>console.log("mongoos bd error"))

};