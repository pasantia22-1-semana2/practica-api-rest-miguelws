import express from "express";

const routerNote = express.Router();

//ruta para obtener todas las notas
routerNote.get("/", (req, rest)=>{
    rest.json({message: "route GET"});
});

//ruta para obtener una sola nota
routerNote.get("/:id", (req, res)=>{
    res.json({message: "route Get one note"})
});

routerNote.post("/", (req, res)=>{
    res.json({message: "route create new note"})
});

routerNote.put("/:id", (req, res)=>{
    res.json({message: "route put"})
});

routerNote.delete("/:id", (req, res)=>{
    res.json({message: "route delete"})
});

export default routerNote;