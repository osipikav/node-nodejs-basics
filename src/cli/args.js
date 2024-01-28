const parseArgs = () => {
  let result = "";
  const args = process.argv.slice(2);
  args.forEach((el, i) => {
    if (i % 2 === 0) {
      result = result + el.slice(2) + " is ";
    } else if (i < args.length - 1) {
      result = result + el + ", ";
    } else {
      result = result + el;
    }
  });

  console.log(result);
};

parseArgs();
