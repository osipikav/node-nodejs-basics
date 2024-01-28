import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const filePath=path.resolve(__dirname,'files', "fileToRead.txt");
    const stream = fs.createReadStream(filePath, "utf-8");
    stream.pipe(process.stdout);
  
};

await read();