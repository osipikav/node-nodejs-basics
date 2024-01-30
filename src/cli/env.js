const parseEnv = () => {
  let res = "";
  for (let key in process.env) {
    if (key.startsWith("RSS_")) {
      res += `${key}=${process.env[key]}; `;
    }
  }
  console.log(res.slice(0, res.length-2));
};

parseEnv();
