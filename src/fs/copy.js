import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const copy = async () => {
  const folderPath = path.join(__dirname, "files");
  const finalFolderPath = path.join(__dirname, "files_copy");

  fs.readdir(__dirname, (err, files) => {
    if (files.includes("files_copy")) {
      throw new Error("FS operation failed");
    }

    fs.mkdir(finalFolderPath, (err) => {
      if (err) throw new Error("FS operation failed");
    });

    fs.readdir(folderPath, (err, files) => {
      if (err) throw new Error("FS operation failed");

        files.forEach((i) => {
          fs.copyFile(
            path.join(folderPath, i),
            path.join(finalFolderPath, i),
            (err) => {
              if (err) throw err
            }
          );
        });
      });
  });
};

await copy();
