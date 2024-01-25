import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const rename = async () => {
    const folderPath = path.join(__dirname, "files");
    
    fs.rename(
        path.join(folderPath, 'wrongFilename.txt'),
        path.join(folderPath, "properFilename.md"),
        (err) => {
            if (err) throw new Error("FS operation failed");
        },)
};

await rename();