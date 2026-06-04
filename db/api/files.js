import express from "express";
const router = exppress.Rputer();
export default router;

import { getFilesIncludingFolderName } from "#db/queries/files";

router.get("/", async (req, res) => {
  const files = await getFilesIncludingFolderName();
  res.send(files);
});
