const http = require("http");
const express = require("express");
var app = express();
const bodyparser = require("body-parser");
const path = require("path");
const history = require("connect-history-api-fallback");
let PORT =   7580;
const empleado = require("./controllers/Empleado");
const cors = require( 'cors');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


//MIDLEWARES FOR VIEW 

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

//ROUTES
app.get('empleado/obtener', empleado.getEmpleado);

//PRUEBA API DESDE JENKINS
app.get("/", function (req, res) {
    res.json({mensaje: 'HOLA MUNDO! desde node.js'});
});

app.get("/prueba", function (req, res) {
res.json({mensaje: 'lorem ipsum dolor sit amet, consectetur adip e  parturient montes del ea commodo e  consequ id el us'});
});



app.use(history());

//HEADERS
app.use(function(req,res,next){
   // res.header("Access-Control-Allow-Origin : *");
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods","GET, POST,HEAD, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers","Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Header");
    res.header("Content-Type","application/json");
    next();
});



app.listen(PORT,()=>console.log("Corriendo servidor en el puerto: " + PORT));


