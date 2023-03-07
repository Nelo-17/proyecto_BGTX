const express=require("express");
const objetosController= require("../controller/objetos.controller");

const api=express.Router();

api.post("/objetos",objetosController.createobjetos);
api.get("/objetos",objetosController.getobjetos);
api.delete("/objetos/:id",objetosController.deleteobjeto);
api.patch("/objetos/:id",objetosController.updateobjetos);
api.get("/objetos/:id",objetosController.getobjetos);


module.exports=api;