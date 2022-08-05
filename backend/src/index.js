import { httpServer } from "./app.js";
import { config as dotenvConfig } from "dotenv";
import { MikroORM } from "@mikro-orm/core";

dotenvConfig();

const bootstrap = async () => {
  await MikroORM.init({
    port: process.env.POSTGRESQL_PORT,
    user: process.env.POSTGRESQL_USER,
    password: process.env.POSTGRESQL_PASSWORD,
    entities: ["./entities"],
    dbName: "pruebaTecnica",
    type: "postgresql",
  });

  httpServer.listen(process.env.PORT, () =>
    console.log(
      `🚀 Servidor de Express levantado en el puerto http://localhost:${process.env.PORT}`
    )
  );
};

bootstrap();
