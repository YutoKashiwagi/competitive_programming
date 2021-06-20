function Main(input) {
  input = input.split("\n");
  const str = input[0]

  let stack = []
  let count = 0

  for (let index = 0; index < str.length; index++) {
    if (stack.length === 0 || stack[0] === str[index]) {
      stack.push(str[index])
    } else {
      count += 2
      stack.pop()
    }
  }

  console.log(count)

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
