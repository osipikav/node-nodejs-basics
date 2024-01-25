import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const filePath = path.join(__dirname, "files", 'fileToRead.txt');
    fs.readFile(
        filePath,
        "utf-8",
        (err, data) => {
          if (err) throw new Error ("FS operation failed");;
          console.log(data);
        },)
};

await read();