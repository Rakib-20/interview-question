const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//const part = num.slice(2, 5);
const removed = num.splice(2, 3, 77);
// console.log(removed);
// console.log(num);

const together = num.join(",");
console.log(together);