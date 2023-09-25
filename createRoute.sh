#!/bin/bash

if [ "$#" -ne 1 ]; then
    echo "Uso: $0 <NomeDaRota>"
    exit 1
fi

# Pega o nome da rota fornecido como argumento
RouterName=$1

# Define o nome do arquivo e o caminho
FILE_PATH="src/routes/${RouterName}.routes.ts"

# Cria o arquivo da rota
cat > $FILE_PATH <<EOL
import { Router, Request, Response } from "express";

const ${RouterName}Routes = Router();

${RouterName}Routes.get("/", async (req: Request, res: Response) => {

});

export default ${RouterName}Routes;
EOL

# Atualiza o arquivo app.ts para incluir a nova rota
echo "import ${RouterName}Routes from './routes/${RouterName}.routes';" >> src/app.ts
echo "app.use(\"/${RouterName}\", ${RouterName}Routes);" >> src/app.ts

echo "Rota ${RouterName} criada com sucesso e importada em app.ts!"
