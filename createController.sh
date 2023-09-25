#!/bin/bash

# Verifica se os argumentos foram fornecidos
if [ "$#" -ne 2 ]; then
    echo "Uso: $0 <NomeDoController> <Diretorio>"
    exit 1
fi

# Pega o nome do controller e do diretório fornecidos como argumentos
CONTROLLER_NAME=$1
DIRECTORY=$2

# Cria o diretório (e subdiretórios, se não existirem)
mkdir -p $DIRECTORY/

# Define o nome do arquivo
FILE_NAME="${DIRECTORY}/${CONTROLLER_NAME}.controller.ts"

# Escreve o conteúdo no arquivo
cat > $FILE_NAME <<EOL
import { Request, Response } from "express";

export const ${CONTROLLER_NAME}Controller = async(req: Request, res: Response) => {

};
EOL

echo "Controller ${CONTROLLER_NAME} criado com sucesso em ${DIRECTORY}/${CONTROLLER_NAME}/"
