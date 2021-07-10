// TLE https://atcoder.jp/contests/code-festival-2017-qualb/tasks/code_festival_2017_qualb_b

function Main(input) {
  input = input.split("\n");

  const n = parseInt(input[0])

  const d = input[1].split(' ').map((_d) => parseInt(_d))

  const m = parseInt(input[2])

  const t = input[3].split(' ').map((_t) => parseInt(_t))

  if (m > n) {
    console.log('NO')
    return
  }

  try {
    t.forEach(_t => {
      const i = d.findIndex(_d => {
        return _d === _t
      })
  
      if (i === -1) {
        throw new Error('not found')
      } else {
        d.splice(i, 1)
      }
    });

    console.log('YES')
  } catch (error) {
    console.log('NO')
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
