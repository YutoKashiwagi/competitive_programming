const getPlayer = (card) => {
  if (card === 'a') {
    return 'A'
  } else if (card === 'b') {
    return 'B'
  } else {
    return 'C'
  }
}

function Main(input) {
  input = input.split("\n").map(i => i.split(''));

  const [a, b, c] = input

  let player = 'A'
  let winner = ''

  while (a.length > 0 || b.length > 0 || c.length > 0) {
    let deck = []
    if (player === 'A') {
      deck = a
    } else if (player === 'B') {
      deck = b
    } else {
      deck = c
    }
    
    if (deck.length === 0) {
      winner = player
      break
    }

    const card = deck[0]
    deck.shift()
    player = getPlayer(card)
  }

  console.log(winner)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
