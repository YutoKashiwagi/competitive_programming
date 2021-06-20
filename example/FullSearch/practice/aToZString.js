function Main(input) {
  const aIndex = input.indexOf('A')

  let zIndex = 0
  for (let index = 0; index < input.length; index++) {
    const arry = input.spilit('')
    if (arry[index] === 'Z') {
      zIndex = index
    }
  }

  console.log(Math.abs(aIndex - zIndex) + 1)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
