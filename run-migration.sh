#!/bin/sh
docker exec -it app yarn typeorm migration:run -d src/data-source.ts
