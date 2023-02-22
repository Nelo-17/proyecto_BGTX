const Accesorios=require("../models/Usuarios.model");

 function createAccesorios(req,res){
    const Accesorios=new Accesorios(req.body);
   
    Accesorio.save((error, AccesoriosStored)=>{
        if(error){
            res.status(400).send({msg: "Error al guardar los datos"})
        }else{
            res.status(200).send(AccesoriosStored)
        }
    })
}

function getAccesorios(req,res){
    Accesorios.find((error, AccesoriosStored)=>{
        if(error){
            res.status(500).send({msg:"No hay datos que consultar"})
        }else{
            res.status(200).send(AccesoriosStored)
        }
    })
}

 function deleteAccesorio(req,res){
    const {id}=req.params;

    Accesorios.findByIdAndDelete(id, (error)=>{
        if(error){
            res.status(400).send({msg:"Error al eliminar el accesorio"})
        }else{
            res.status(200).send({msg: "Accesorio eliminado"})
        }
    })
}

function updateAccesorios(req,res){
   const {id}=req.params;
   const datosAccesorio=req.body;

   Accesorios.findByIdAndUpdate({_id:id},datosAccesorio, (error)=>{
    if(error){
        res.status(400).send({msg: "Datos no actualizados"})
    }else{
        res.status(200).send({msg: "Los datos fueron actualizados correctamente"})
    }
   })
}

async function getAccesorio(req,res){
    console.log("Obtener los accesorios");
}



module.exports={
    createAccesorios,
    updateAccesorios,
    deleteAccesorio,
    getAccesorios,
    getAccesorios
}