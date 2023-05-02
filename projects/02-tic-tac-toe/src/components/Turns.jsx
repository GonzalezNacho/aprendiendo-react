import { Square } from "./Square";
import { TURNS } from "../constants";

export const Turns = ({turn}) => {
    return (
        <>
            <Square isSelected ={turn === TURNS.X}>
            {TURNS.X}
            </Square>
            <Square isSelected ={turn === TURNS.O}>
            {TURNS.O}
            </Square>
        </>
    )
}