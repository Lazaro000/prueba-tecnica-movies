import { httpServer } from "./app.js";
import { config as dotenvConfig } from "dotenv";
dotenvConfig();

httpServer.listen(process.env.PORT, () =>
  console.log(
    `🚀 Servidor de Express levantado en el puerto http://localhost:${process.env.PORT}`
  )
);
