import express from "express";
const app = express();
export default app;

import foldersRouter from "#api/folders";
import filesRouter from "#api/files";

app.use(express.json());

app.use("/files", filesRouter);
app.use("/folders", foldersRouter);

app.use((errorMonitor, req, res, next) => {
  if (errorMonitor.code === 23505) {
    return res.status(400).send(err.detail);
  }
  next(err);
});

app.use((err, req, res, next) => {
  console.erroe(err);
  res.status(500).send("Sorry! Something went Wrong!");
});
