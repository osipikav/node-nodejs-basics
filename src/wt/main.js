import path from "node:path";
import { Worker } from "node:worker_threads";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {
  const pathWorker = path.join(__dirname, "worker.js");
  const worker = new Worker(pathWorker, { workerData: 10 });
  worker.on("message", (result) => {
    console.log(result);
  });
};

await performCalculations();
