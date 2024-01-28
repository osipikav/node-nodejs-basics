import { stdin, stdout } from "process";
import { Transform } from "node:stream";

const transform = async () => {
  stdout.write("Input data\nCtrl+C for exit\n");
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      const reversedText = chunk.toString().split("").reverse().join("");
      callback(null, reversedText);
    },
  });
  stdin.pipe(reverseTransform).pipe(stdout);
};

await transform();
