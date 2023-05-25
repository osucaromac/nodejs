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
    res.json({
        autor: "LEAA",
        correo: "nem.luise@coppel.com",
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga in, iure sunt veritatis alias nulla quasi aliquid earum ut at error, sapiente corporis distinctio autem iusto, totam ad a deleniti!'
                +'Ratione molestias optio saepe harum reiciendis qui aperiam neque deleniti reprehenderit, ipsum sunt dolorem nemo! Quisquam a voluptatibus corrupti reprehenderit enim, quidem eius error nostrum commodi placeat facilis atque voluptatem.'
        +'Quod ullam numquam totam consectetur esse aspernatur pariatur ab quia veniam cupiditate molestiae hic, nam saepe illum ut inventore neque? Necessitatibus natus nihil libero modi dolorem dolorum eligendi ullam quasi.'
        +'Optio, excepturi dolorum laborum dicta iste veniam aspernatur doloremque in fugit, eaque tenetur reiciendis vitae cum est facilis maxime modi nam. Rem ea nobis, accusantium doloremque laboriosam deserunt dolor maxime.'
        +'Doloribus distinctio laborum quam eius nesciunt facere tempora voluptatibus accusantium magni. Laborum, deserunt voluptas. Aut dolor ex culpa minima labore qui numquam ad dolorum aliquid recusandae. Quod ipsa atque voluptatem!'
        +'Quidem nisi temporibus sed facilis obcaecati eum amet optio aut perspiciatis doloremque nemo veniam itaque iure aspernatur dolores quaerat, minus dolor, at nostrum expedita laboriosam sequi? Aspernatur dolorum delectus sapiente.'
        
    });
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


