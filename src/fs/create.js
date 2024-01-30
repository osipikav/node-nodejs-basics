import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const data = "I am fresh and young";

const create = async () => {
  const folderPath = path.join(__dirname, "files");
  fs.readdir(folderPath, (err, files) => {
     if (files.includes("fresh.txt")) {
         throw new Error ("FS operation failed");
    } else {
      fs.writeFile(path.join(folderPath, "fresh.txt"), data, (err) => {
        if (err) throw err;
        console.log("Writen to file successfully!");
      });
    }
  });

};

await create();
