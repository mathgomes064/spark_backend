import { propriedadeStorage } from "../config/multer"
import { Router } from "express";
import { IAnexoCreate } from "../interfaces/anexos";
import { createAnexoService } from "../services/anexos/createAnexos.service";
import { AppError,handleError } from "../errors/appError";

const multer = require('multer');
const fs = require("fs");
const path = require('path')

const anexoFiles = Router();

const upload = multer({ storage: propriedadeStorage })

anexoFiles.post("/",upload.array("files"),async(req: any,res: any)=>{
  try{
    console.log(req.body)
    let pathUrl = req.files[0].destination.split("src")[1]

    let dataFiles:IAnexoCreate[] = []

    for (let i = 0; i < req.files.length; i++) {
      const file = req.files[i];
      
      const novoObjeto = {
        ref: req.body.ref,
        nome: file.originalname,
        file_name: file.filename,
        path: file.destination,
        host: process.env.CURRENT_FILE_HOST!,
        tipo: file.mimetype,
        excluido: false,
        url: process.env.CURRENT_FILE_HOST! + pathUrl + "/" + file.filename,
        id_ref: req.body.id_ref,
      };

      console.log(novoObjeto)
    
      dataFiles.push(novoObjeto);
    }

    const newAnexo = await createAnexoService(dataFiles);

    return res.status(201).send(newAnexo);
  }catch (error) {
    if(error instanceof AppError){
        handleError(error, res);
    } 
  }
})

anexoFiles.get("/imagens", (req, res) => {
  const diretorio = "./src/files/propriedades"; 

  fs.readdir(diretorio, (err: any, files: any) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao obter as informações das imagens" });
    }

    const imagens = files.map((file: any) => {
      const filePath = path.join(diretorio, file);
      const { birthtimeMs, size } = fs.statSync(filePath);

      return {
        nome: file,
        dataCriacao: birthtimeMs,
        tamanho: size,
      };
    });

    res.json({ imagens });
  });
});

export default anexoFiles



