import { config as dotenvConfig } from "dotenv";
import { initializeHttpServer } from "./infrastructure/config/initialize-http.js";
import { initializeOrm } from "./infrastructure/config/initialize-orm.js";

dotenvConfig();

const bootstrap = async () => {
  await initializeOrm();
  const httpServer = initializeHttpServer();

  httpServer.listen(process.env.PORT, () =>
    console.log(
      `🚀 Servidor de Express levantado en el puerto http://localhost:${process.env.PORT}`
    )
  );
};

bootstrap();
