import { sequelize } from "./src/db";
import app from "./src/app";

sequelize.sync({force:true, logging:false})
.then(()=>{
  console.log("Base de datos conectada")
  app.listen(3001, () => console.log("App es eschuchada en 3001"));
})
.catch((err)=>console.log(err))

