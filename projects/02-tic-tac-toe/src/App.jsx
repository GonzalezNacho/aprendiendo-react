import { useState } from "react";
import confetti from "canvas-confetti";
import { TURNS } from "./constants";
import { checkWinnerFrom, checkEndGame } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
import { Table } from "./components/Table";
import { Turns } from "./components/Turns";
import { saveGameToStorage, resetGameToStorage } from "./logic";


function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage? JSON.parse(boardFromStorage) : Array(9).fill(null)
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  });

  const [winner, setWinner] = useState(null)



  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameToStorage()
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGameToStorage({
      board:newBoard,
      turn:newTurn
    })

    

    const newWinner = checkWinnerFrom(newBoard);
    if(newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <Table updateBoard = {updateBoard} board = {board}></Table>
      
      <section className="turn">
        <Turns turn ={turn}></Turns>
      </section>
        
      <section>
        <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
      </section>
    </main>
  )
}

export default App