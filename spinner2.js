
let firstSpin = () => { setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   '); 
}, 700); 

setTimeout(() => {
  process.stdout.write('\r|  '); 
}, 900); 

}

for( let i = 0; i < 2; i++){
  setTimeout(() => {
    firstSpin();
  }, 1100);
  }
firstSpin()






// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   '); 
// }, 1500); 

// setTimeout(() => {
//   process.stdout.write('\r|  '); 
// }, 1700); 
