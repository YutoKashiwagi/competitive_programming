const sort = (arry) => {
  return arry.sort(
    (a,b) => {
      return (a < b ? 1 : -1);
    }
  );
}

function Main(input) {
  _input = input.split("\n")
  _input.shift()
  
  const mauntains = _input.map(m => {
    const _m = m.split(' ')
    
    return {
      name: _m[0],
      height: parseInt(_m[1])
    }
  })
  
  const heights = mauntains.map(m => {
    return m.height
  })
  
  const sorted = sort(heights)
  const second_height = sorted[1]

  const second_mountain = mauntains.find((m) => {
    return m.height === second_height;
  })

  console.log(second_mountain.name)
  }
Main(require("fs").readFileSync("/dev/stdin", "utf8"))
