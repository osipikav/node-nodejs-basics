import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { createGzip } from 'zlib';
import fs from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
  const compressFilePath = path.join(__dirname, "files", "fileToCompress.txt");
  const archiveFilePath = path.join(__dirname, "files", "archive.gz");

  const readStream = fs.createReadStream(compressFilePath);
  const writeStream = fs.createWriteStream(archiveFilePath);
  const gzipStream = createGzip();
  readStream.pipe(gzipStream).pipe(writeStream);
};

await compress();
