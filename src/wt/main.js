import path from "node:path";
import { Worker } from "node:worker_threads";
import { dirname } from "path";
import os from "node:os";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {
  const pathWorker = path.join(__dirname, "worker.js");

  const numCores = os.cpus().length;
  const results = [];

  for (let i = 0; i < numCores; i++) {
    const workerPromise = new Promise((resolve) => {
      const worker = new Worker(pathWorker, { workerData: 10 + i });

      worker.on("message", (mes) => {
        resolve({ status: "resolved", data: mes });
      });
      worker.on("error", (err) => {
        resolve({ status: "error", data: null });
      });
    });
    const result = await workerPromise; 
    results.push(result);
  }
  console.log(results);
};

await performCalculations();
