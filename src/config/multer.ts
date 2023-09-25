const multer = require('multer')
const fs = require('fs');
import crypto from "crypto";

const getDestination = (req:any, file:any, cb:any) => {
  let ref = req.body.ref
  let id_ref = req.body.id_ref
  
  let tabela = ref

  let fullpath ="./src/files/" + tabela + "/" + id_ref

  if(!fs.existsSync(fullpath)){
    fs.mkdirSync(fullpath, {recursive:true});
  }

  cb(null, fullpath)
};


export const propriedadeStorage = multer.diskStorage({
  destination: getDestination,
  filename: (req: any, file: any, cb: any) => {
    const hash = crypto.randomBytes(6).toString('hex')
    cb(null, `${hash}.${file.originalname}`)
  }
})

