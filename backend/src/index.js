// const express = require("express");
// const dotenv = require("dotenv");
// const fetch = require("node-fetch");
import express from "express";
import { config as dotenvConfig } from "dotenv";
import fetch from "node-fetch";

dotenvConfig();

const expressApp = express();

expressApp.get("/peliculas", async (req, res) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_API_KEY}&page=1`,
    {
      method: "GET",
    }
  );

  const data = await response.json();

  res.send(data);
});

expressApp.listen(process.env.PORT, () =>
  console.log(
    `🚀 Servidor de Express levantado en el puerto http://localhost:${process.env.PORT}`
  )
);
