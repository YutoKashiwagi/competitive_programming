const diff = (a, b) => {
  return Math.abs(a - b)
}

function Main(input) {
  input = input.split("\n");
  const nums = input[1].split(' ').map(n => parseInt(n));
  console.log(nums);

  const max = Math.max(...nums);
  const min = Math.min(...nums);

  console.log(diff(max, min));
  }
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
