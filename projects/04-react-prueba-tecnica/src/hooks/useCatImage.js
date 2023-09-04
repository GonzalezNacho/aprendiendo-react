import { getImageUrlWhitTrheeFirstFacts } from "../services/facts"
import { useEffect, useState } from "react"


export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect (() => {
        if (!fact) return
        getImageUrlWhitTrheeFirstFacts({ fact }).then( newImageUrl => setImageUrl(newImageUrl))
    },[fact])

    return { imageUrl } 
}