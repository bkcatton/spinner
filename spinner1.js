setTimeout(() => {
  process.stdout.write('\r|   ');
}, 200);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 600);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1200);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1800);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 2100);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r-   '); 
}, 2400);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 2700);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r|   '); 
}, 3000);