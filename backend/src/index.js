import expressApp from "./app.js";

expressApp.listen(process.env.PORT, () =>
  console.log(
    `🚀 Servidor de Express levantado en el puerto http://localhost:${process.env.PORT}`
  )
);
