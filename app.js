const epxress = require("express");
const app =epxress();
const userRouter = require("./src/router/userRouter");
const todolistRouter = require("./src/router/todolistrouter");

app.use(epxress.json());
app.use("/api",userRouter);
app.use("/api",todolistRouter);
module.exports= app;