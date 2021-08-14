// 再帰関数での実装

function Main(input) {
  input = input.split("\n");
  const [maxX, maxY] = input[0].split(' ')

  input.shift()
  const area = input.map(i => i.split(''))

  const reached = area.map(a => {
    return a.map(_a => {
      return false
    })
  })

  let result = 'No'

  let initX = 0
  let initY = 0

  area.forEach((a, x) => {
    a.forEach((_a, y) => {
      if (area[x][y] === 'g') {
        initX = x
        initY = y
      }
    })
  });

  const search = (x, y) => {
    // 塀の外
    if ((x < 0) || x > maxX -1 || y < 0 || y > maxY -1 ) {
      return
    }

    // ゴール
    if (area[x][y] === 'g') {
      result = 'Yes'
      return
    }
    
    // 壁
    if (area[x][y] === '#') {
      return
    }
  
    // すでに到達ずみ
    if (reached[x][y]) {
      return
    }
  
    // 到達した
    reached[x][y] = true
  
    search(x + 1, y)
    search(x - 1, y)
    search(x, y + 1)
    search(x, y - 1)
  }

  search(initX, initY)

  console.log(result)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
