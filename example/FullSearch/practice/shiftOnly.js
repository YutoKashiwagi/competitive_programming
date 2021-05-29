// https://atcoder.jp/contests/abc081/tasks/abc081_b
const isOdd = (n) => {
  return n % 2 === 1
}

function Main(input) {
  input = input.split("\n");
  let nums = input[1].split(' ').map(n => parseInt(n))

  let count = 0;
  let keep = true;

  while (keep) {
    isOddIncluded = !!nums.find(n => isOdd(n));

    if (isOddIncluded) {
      keep = false
    } else {
      nums = nums.map(n => n / 2);
      count++;
    }
  }

  console.log(count);
  }
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
