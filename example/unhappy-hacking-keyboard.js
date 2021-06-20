function Main(input) {
  input = input.split("\n");
  const str = input[0]

  let stack = []

  for (let index = 0; index < str.length; index++) {
    if (str[index] === 'B') {
      stack.pop()
    } else {
      stack.push(str[index])
    }
  }

  console.log(stack.join(''))
  }
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// テスト
// let str = '0BB1'

// let stack = []

// for (let index = 0; index < str.length; index++) {
//   if (str[index] === 'B') {
//     stack.pop()
//   } else {
//     stack.push(str[index])
//   }
// }

// console.log(stack.join(''))
