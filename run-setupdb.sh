#!/bin/sh

sudo rm -rf ./src/migrations/*

docker exec -it app yarn typeorm migration:create src/migrations/initialMigration

docker exec -it app yarn typeorm migration:generate src/migrations/generateTables -d src/data-source.ts

docker exec -it app yarn typeorm migration:run -d src/data-source.ts
