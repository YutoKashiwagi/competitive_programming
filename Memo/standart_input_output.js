function Main(input) {
  input = input.split("\n");
  const inputNums = input[1].split(' ').map(n => parseInt(n))

  const N = inputNums.length

  const nums = []

  // inputNums.forEach((n, index) => {
  //   if ((N % 2) === ((index + 1) % 2)) {
  //     nums.unshift(n)
  //   } else {
  //     nums.push(n)
  //   }
  // });

  for (let index = 0; index < inputNums.length; index++) {
    if ((N % 2) === ((index + 1) % 2)) {
      nums.unshift(inputNums[index])
    } else {
      nums.push(inputNums[index])
    }
  }

  console.log(nums.join(' '))
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
