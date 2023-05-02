import { Square } from "./Square"

export const Table = ({updateBoard, board}) => {
    return (
        <section className="game">
        {
          board.map((square,index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
    )
}