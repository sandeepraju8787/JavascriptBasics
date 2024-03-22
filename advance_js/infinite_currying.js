// const nFactorial = (a) => {
//   return (b) => {
//     if (!b) {
//       return a;
//     } else {
//       return nFactorial(a * b);
//     }
//   };
// };

// const sum = nFactorial(2)(2)(3)();
// console.log(sum);

const multiplyN = (a) => {
  return (b) => {
    if (!b) {
      return a;
    } else {
      return multiplyN(a * b);
    }
  };
};

const res = multiplyN(2)(2)(2)(2)(2)();

console.log(res);
