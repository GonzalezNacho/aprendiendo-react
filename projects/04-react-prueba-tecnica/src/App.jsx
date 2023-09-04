import { useState, useEffect } from "react"
import './App.css'
import { getRandomFact } from "./services/facts"
import { useCatImage } from "./hooks/useCatImage"

const CAT_PREFIX_IMAGE_URL = `https://cataas.com`

export function App () {
    const [fact, setFact] = useState()
    const {imageUrl } = useCatImage({ fact }) 

    useEffect (() => {
        getRandomFact().then( newFact => setFact(newFact))
    },[])

    const handleClick = () => {
        getRandomFact().then( newFact => setFact(newFact))
    }

    return(
        <main>
            <h1>App de gatitos </h1>
            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={CAT_PREFIX_IMAGE_URL + imageUrl} alt={`Image extracted using the first three words for ${fact}`}/>}
        </main>
    )
}
