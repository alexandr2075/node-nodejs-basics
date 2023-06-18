import { parentPort } from "node:worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  parentPort.once("message", (message) => {
    try {
      const fib = nthFibonacci(message);
      parentPort.postMessage({
        status: "resolved",
        data: fib,
      });
    } catch (error) {
      parentPort.postMessage({
        error,
        data: null,
      });
    }
  });
};

sendResult();
