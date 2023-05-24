const http = require("http");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const path = require("path");
const history = require("connect-history-api-fallback");
const PORT =  7580;
const empleado = require("./controllers/Empleado")


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));



//MIDLEWARES FOR VIEW 
app.use(history())
app.use(express.static(path.join(__dirname, "public")));

//ROUTES
app.get('empleado/obtener', empleado.getEmpleado);


//HEADERS
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","GET, POST,HEAD, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});



app.listen(PORT,()=>console.log("Corriendo servidor en el puerto: " + PORT));


