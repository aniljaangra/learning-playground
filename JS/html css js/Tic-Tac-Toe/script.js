const squares = document.querySelectorAll('.square');
const header = document.querySelector('.heading');
const resetButton = document.querySelector('#reset');

let currentPlayer = 1;
let totalMoves = 0;
const BOARD_WIDTH = 3;
let gameOver = false;
const FILLER = {
  1 : 'X',
  2 : 'O'
}
const WIN_CONDITIONS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

resetButton.addEventListener('click', resetBoard)
squares.forEach( square => {
  square.addEventListener('click', onBoxClick(square) )
})

function onBoxClick(square){
  return function onClick(){
      if(gameOver){
        square.removeEventListener('click',onClick);
        resetButton.disabled = false;
        resetButton.removeAttribute('disabled')
        return;
      }
      square.textContent = FILLER[currentPlayer];
      square.disabled = true;
      totalMoves++;
     square.removeEventListener('click',onClick);
      if(didPlayerWin()){
        header.textContent = `Player ${currentPlayer} Won!!`
        gameOver = true;
      }else if(totalMoves >= BOARD_WIDTH*BOARD_WIDTH){
        header.textContent = `Game Tied!!`
      }else{
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        header.textContent = `Player ${currentPlayer}'s Turn`
      }
  }
}

function didPlayerWin(){
  return WIN_CONDITIONS.some(condition => {
    return condition.every( idx => {
      return squares[idx].textContent === FILLER[currentPlayer]
    })
  })
}

function resetBoard(){
  squares.forEach(square => {
    square.textContent = '';
    square.addEventListener('click', onBoxClick(square) )
    gameOver = false;
    currentPlayer = 1;
    totalMoves = 0;
  })
  header.textContent = "Player 1's turn"
}
