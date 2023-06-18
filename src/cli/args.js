import { argv } from "node:process";

const parseArgs = () => {
  const prop = [];
  const value = [];
  argv.slice(2).forEach((val, index) => {
    index % 2 === 0 ? prop.push(val.substring(2)) : value.push(val);
  });
  prop.forEach((el, idx) => {
    console.log(`${el} is ${value[idx]}`);
  });
};

parseArgs();
