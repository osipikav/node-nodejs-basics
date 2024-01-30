import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "node:fs";
import { createHash } from "node:crypto";

const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) throw err;
    const hash = createHash("sha256").update(data);
    const result = hash.digest("hex");
    console.log(result);
  });
};

await calculateHash();
