const objetos=require("../models/objetos.model");

 function createobjetos(req,res){
    const objetos=new objetos(req.body);
   
    objeto.save((error, objetosStored)=>{
        if(error){
            res.status(400).send({msg: "Error al guardar los datos"})
        }else{
            res.status(200).send(objetosStored)
        }
    })
}

function getobjetos(req,res){
    objetos.find((error, objetosStored)=>{
        if(error){
            res.status(500).send({msg:"No hay datos que consultar"})
        }else{
            res.status(200).send(objetosStored)
        }
    })
}

 function deleteobjeto(req,res){
    const {id}=req.params;

    objetos.findByIdAndDelete(id, (error)=>{
        if(error){
            res.status(400).send({msg:"Error al eliminar el objeto"})
        }else{
            res.status(200).send({msg: "objeto eliminado"})
        }
    })
}

function updateobjetos(req,res){
   const {id}=req.params;
   const datosobjeto=req.body;

   objetos.findByIdAndUpdate({_id:id},datosobjeto, (error)=>{
    if(error){
        res.status(400).send({msg: "Datos no actualizados"})
    }else{
        res.status(200).send({msg: "Los datos fueron actualizados correctamente"})
    }
   })
}

async function getobjeto(req,res){
    console.log("Obtener los objetos");
}



module.exports={
    createobjetos,
    updateobjetos,
    deleteobjeto,
    getobjetos,
    getobjetos
}