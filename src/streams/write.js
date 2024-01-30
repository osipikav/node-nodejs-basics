import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "node:fs";
import { stdin, stdout } from "process";

const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
  const filePath = path.resolve(__dirname, "files", "fileToWrite.txt");
  const stream = fs.createWriteStream(filePath);

  stdout.write("Input data\nCtrl+C for exit\n");
  stdin.on("data", (data) => stream.write(data));
};

await write();
