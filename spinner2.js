const spinner = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-']; 
let time = 0;
for (const item of spinner) {
  setTimeout(() => {
    process.stdout.write(item);
      }, time += 200)
};
setTimeout(() => {
  console.log("\n");
    }, time)
