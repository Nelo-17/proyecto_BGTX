const express=require("express");
const AccesoriosController= require("../controller/Accesorios.controller");

const api=express.Router();

api.post("/accesorios",AccesoriosController.createAccesorios);
api.get("/accesorios",AccesoriosController.getAccesorios);
api.delete("/accesorios/:id",AccesoriosController.deleteAccesorio);
api.patch("/accesorios/:id",AccesoriosController.updateAccesorios);
api.get("/accesorios/:id",AccesoriosController.getAccesorios);


module.exports=api;