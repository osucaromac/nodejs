const {Client} = require("pg");


const conexionPosgres = {
    user: '',
    host:'localhost',
    password:'',
    database:'',
    port:''
}

const client = new Client(conexionPosgres);
