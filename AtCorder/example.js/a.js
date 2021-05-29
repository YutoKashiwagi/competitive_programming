
const check = (arry) => {
  return 2 * arry[1] === arry[0] + arry[2]
}

const sort = (arry) => {
  return arry.sort(
    (a,b) => {
      return (a < b ? 1 : -1);
    }
  );
}

function Main(input) {
  const input = input.split(" ");

  const sorted = sort(input);

  const ans = check(check(sorted))

  const answer = ans ? 'Yes' : 'No'
  
  console.log(answer);
  }
Main(require("fs").readFileSync("/dev/stdin", "utf8"));//おまじないs
