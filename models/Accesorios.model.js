const mongoose=require("mongoose");


const Accesorios=mongoose.Schema({
    Account:{
        type:String,
        unique:true
    },
    nombre: String,
    modelo: String,
    categoría: String,
    web: String,
    created_at:Date
})

module.exports=mongoose.model("Accesorios", Accesorios);