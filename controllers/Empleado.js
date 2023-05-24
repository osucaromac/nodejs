const pool = require("../config/conexion");

const empleado = {};

empleado.getEmpleado = async (req,res) =>{
    const id_empleado = req.params.arrayList;

    try{
        const empleado = await pool.query(`SELECT * FROM empleado WHERE id_empleado = $1`,[id_empleado]);
        res.status(200).json(empleado.rows);
        console.log(empleado);
    }catch(error){
        res.status(500).json(error);
    }
}



module.exports = empleado;