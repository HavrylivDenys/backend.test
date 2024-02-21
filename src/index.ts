import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const port = 3000;
const prisma = new PrismaClient();

app.get("/", async (req, res) => {
  const movies = await prisma.movies.findMany();
  res.json(movies);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
