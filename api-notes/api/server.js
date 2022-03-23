import express from "express";
//const express = require("express");
import noteRoute from "./notes/routes/note.route.js"

export class Server{
//class Server{
  constructor(hostName, port, nameApp){
    this._hostname = hostName;
    this._port = port;
    this._name = nameApp;
    this._api = express();
    this.initMiddlewares();
    this.initRoutes();
  }

  initMiddlewares(){
    this._api.use(express.json());
    this._api.use(express.urlencoded({extended: true}));
  }

  initRoutes(){
    this._api.use("/api/v1/note", noteRoute);
    this._api.use("/api/v1/home", (req, res)=>{
      res.json({message: "Welcome"});
    });
  }

  initServer(){
    try{
      this._api.set('trust proxy', this._hostname);
      this._api.listen(this._port, ()=>{
        console.log(`server of ${this._name} running at http://${this._hostname}: ${this._port}`);
      });
    }
    catch (error) {
      console.log(`Error al iniciar el servidor detalle: ${error}`);
    }
  }
}

//module.exports = Server;
