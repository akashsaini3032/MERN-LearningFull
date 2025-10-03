// const cluster = require('cluster');
//  const http = require('http');
//  const os = require('os');
//  if (cluster.isMaster) {
//   // Get the number of CPU cores available
//   const numCPUs = os.cpus().length;
//   console.log(`Master process PID: ${process.pid}`);
//   console.log(`Forking ${numCPUs} workers...`);
//   // Fork workers
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }
//   // Listen for worker exit events
//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`Worker ${worker.process.pid} died. Forking a new worker...`);
//     cluster.fork();
//   });
//  } else {
//   // Worker processes handle incoming HTTP requests
//   http.createServer((req, res) => {
//     res.writeHead(200);
//     res.end(`Handled by worker process PID: ${process.pid}\n`);
//   }).listen(3000);
//   console.log(`Worker process PID: ${process.pid} is running`);
//  }


const cluster = require("cluster");
 const http = require("http");
 const os = require("os");
 if (cluster.isMaster) {
 // Master process
 console.log(`Master process ${process.pid} is running`);
 // Get number of CPU cores
 const numCPUs = os.cpus().length;
 // Fork workers
 for (let i = 0; i < numCPUs; i++) {
 cluster.fork();
 }
 // Listen for worker exit
 cluster.on("exit", (worker, code, signal) => {
 console.log(`Worker ${worker.process.pid} died`);
 console.log("Starting a new worker...");
 cluster.fork(); // Restart a new worker if one dies
 });
 } else {
 // Worker processes
 http.createServer((req, res) => {
 res.writeHead(200);
 res.end(`Hello from Worker ${process.pid}\n`);
 }).listen(3000);
 console.log(`Worker ${process.pid} started`);
 }