const express= require("express");
const app = express();
app.use(express.static('./public'));
//app.get("/home", (req, res)=>{}) usar para ejs(interessante)
app.listen(8080,()=>{
    console.log('Servidor rodando...');
});

