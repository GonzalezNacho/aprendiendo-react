import { useState, useEffect } from "react"
import './App.css'
import { getRandomFact } from "./services/facts"


const CAT_PREFIX_IMAGE_URL = `https://cataas.com`

export function App () {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    

    useEffect (() => {
        getRandomFact().then( newFact => setFact(newFact))
    },[])

    useEffect (() => {
        if (!fact) return
        const threeFirtsWord = fact.split(' ', 3).join(' ')
        
        fetch(`https://cataas.com/cat/says/${threeFirtsWord}?json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setImageUrl(url)
            })
    },[fact])

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
