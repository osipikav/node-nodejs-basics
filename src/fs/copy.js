import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const copy = async () => {
  const filePath = path.join(__dirname, "files");
  const finalFilePath = path.join(__dirname, "files_copy");

  fs.readdir(__dirname, (err, files) => {
       if (files.includes("files_copy")) {
        throw new Error ("FS operation failed");
    }
  fs.readdir(filePath, (err, files) => {
    if (err) throw new Error("FS operation failed");

    fs.mkdir("./files_copy", () => {
      files.forEach((i) => {
        fs.copyFile(
          path.join(filePath, i),
          path.join(finalFilePath, i),
          (err) => {
            if (err) throw err
          }
        );
      });
    });
  });
  });
};

await copy();
