import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { createGunzip } from 'zlib';
import fs from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  const compressFilePath = path.join(__dirname, "files", "fileToCompress.txt");
  const archiveFilePath = path.join(__dirname, "files", "archive.gz");

  const readStream = fs.createReadStream(archiveFilePath);
  const writeStream = fs.createWriteStream(compressFilePath);
  const gunzipStream = createGunzip();
  readStream.pipe(gunzipStream).pipe(writeStream);
};

await decompress();