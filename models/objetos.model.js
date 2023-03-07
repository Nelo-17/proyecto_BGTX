const mongoose=require("mongoose");


const objetos=mongoose.Schema({
    alta:{
        type:String,
        unique:true
    },
    nombre: String,
    modelo: String,
    categoría: String,
    web: String,
    created_at:Date
})

module.exports=mongoose.model("objetos", objetoss);