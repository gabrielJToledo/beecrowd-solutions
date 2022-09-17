var input = require('fs').readFileSync('stdin', 'utf8');

var rocks = input.split('\n');

let exitWhile = 0

let countDiamond = 0

rocks.forEach((rock) => {
  let resultado = rock.replace(/[.]/g, '')

  console.log(resultado)

  while (exitWhile != -1) {

    let firstDiamondPart = resultado.search(/[<][>]/)

    let secondDiamondPart = firstDiamondPart + 1

    if(firstDiamondPart != -1) {
      countDiamond++
    }  

    resultado = (firstDiamondPart != 0) ? resultado.slice(0, firstDiamondPart - 1) + resultado.slice(firstDiamondPart) : resultado.slice(0, 0) + resultado.slice(firstDiamondPart)

    resultado = (secondDiamondPart != 0) ? resultado.slice(0, secondDiamondPart - 1) + resultado.slice(secondDiamondPart) : resultado.slice(0, 0) + resultado.slice(secondDiamondPart)

    if (firstDiamondPart == -1) {
      exitWhile = -1
    }

  }
  
  console.log(countDiamond)

  countDiamond = 0

  exitWhile = 0

})
