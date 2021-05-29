function Main(input) {
  input = input.split("\n");
  inputN = parseInt(input[0]);

  let n = inputN;
  let ans = null

  // 奇数チェック
  if (inputN % 2 === 1) {
    n = 2 * inputN
  }

  while (ans === null) {
    if ((n % 2 === 0) && (n % inputN === 0)) {
      ans = n;
    } else {
      n++
    }
  }

  console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
