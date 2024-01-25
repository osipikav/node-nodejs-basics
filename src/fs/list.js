import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
  const filePath = path.join(__dirname, "files");
  fs.readdir(filePath, (err, files) => {
    if (err) throw new Error("FS operation failed");
    console.log(files);
  });
};
await list();