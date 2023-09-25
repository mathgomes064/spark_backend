#!/bin/sh

if [ -z "$1" ]; then
  echo "Por favor, forneça o nome da migração."
  exit 1
fi

docker exec -it app yarn typeorm migration:generate src/migrations/"$1" -d src/data-source.ts
