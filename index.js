const app = require("./app");
const {connectdb} = require("./database");
const port = 3000;
const callserver =()=>{
    console.log("hey buddy you can run now");
     };
connectdb();
     app.listen(port,callserver);
    
