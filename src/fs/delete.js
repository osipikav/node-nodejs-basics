import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  const folderPath = path.join(__dirname, "files");
  fs.readdir(folderPath, (err, files) => {
    if (files.includes("fileToRemove.txt")) {
      fs.unlink(path.join(folderPath, "fileToRemove.txt"), (err) => {
        if (err) throw err;
      });
    } else throw new Error("FS operation failed");
  });
};

await remove();
